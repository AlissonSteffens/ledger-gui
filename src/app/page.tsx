"use client";

import { columns } from "@/components/transactions/columns";
import { DataTable } from "@/components/transactions/table";
import { Button } from "@/components/ui/button";
import { LedgerTransaction } from "@/types/ledger";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [history, setHistory] = useState<LedgerTransaction[] | null>(null);

  useEffect(() => {
    axios.get("/api/history").then((res) => {
      setHistory(res.data);
    });
  }, []);

  return (
    <main className="min-h-screen p-24">
      <div className="flex flex-row gap-4 w-full justify-end">
        <Link href="/transactions/new">
          <Button className="mb-4">New Transaction</Button>
        </Link>

        <Link href="/summary">
          <Button className="mb-4">Summary</Button>
        </Link>
      </div>
      {history && <DataTable columns={columns} data={history} />}
    </main>
  );
}
