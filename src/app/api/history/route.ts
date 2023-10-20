import { LedgerProgramRunner } from "@/services/ledger_program_runner";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const runner = new LedgerProgramRunner();
  const result = await runner.run(["history",  "50"]);
  return Response.json(result);
}
