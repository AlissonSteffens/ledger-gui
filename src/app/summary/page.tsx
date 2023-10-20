"use client";

import YearSummary from "@/components/summary/year_summary";
import { SummaryDTO, YearSummaryDTO } from "@/types/ledger";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SummaryPage() {
  const [summary, setSummary] = useState<YearSummaryDTO[] | null>(null);

  useEffect(() => {
    axios.get("/api/summary").then((res) => {
      setSummary([res.data]);
    });
  }, []);

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl">Summary</h1>

      {summary &&
        summary.map((s: YearSummaryDTO) => (
          <YearSummary key={s.year} summary={s} />
        ))}
    </main>
  );
}
