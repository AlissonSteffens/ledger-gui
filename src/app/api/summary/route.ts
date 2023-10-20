import { LedgerProgramRunner } from "@/services/ledger_program_runner";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const runner = new LedgerProgramRunner();
  const result = await runner.run(["summary", "TRANSFER", "year", "2023"]);
  return Response.json(result);
}
