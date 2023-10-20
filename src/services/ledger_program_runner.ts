import { spawn } from "child_process";

export class LedgerProgramRunner {
  protected file: string;
  protected script: string;

  constructor() {
    if (!process.env.LEDGER_SCRIPT_PATH) {
      throw new Error("LEDGER_SCRIPT_PATH not set");
    }
    if (!process.env.LEDGER_TRANSACTIONS_FILE_PATH) {
      throw new Error("LEDGER_FILE_PATH not set");
    }

    // env LEDGER_SCRIPT_PATHG
    this.script = process.env.LEDGER_SCRIPT_PATH;
    this.file = process.env.LEDGER_TRANSACTIONS_FILE_PATH;
  }

  async run(params: string[]): Promise<any> {
    const args = ["ts-node", this.script, this.file, ...params];

    const currentOS = process.platform;

    const program = `npx${currentOS === "win32" ? ".cmd" : ""}`;
    const child = spawn(program, args);

    const data = [];

    for await (const chunk of child.stdout) {
      data.push(chunk);
    }

    const exitCode = await new Promise((resolve, reject) => {
      child.on("close", resolve);
      child.on("error", reject);
    });

    if (exitCode) {
      throw new Error(
        `subprocess error exit ${exitCode}, signal ${child.signalCode}`
      );
    }

    const result = Buffer.concat(data).toString();
    return JSON.parse(result);
  }
}
