import { cn } from "@/lib/utils";
import { LedgerTransaction } from "@/types/ledger";

export default function Currency({
  value,
  v,
}: {
  value: string | number | unknown;
  v: any;
}) {
  const val = Number(value) ?? 0;
  const original = v?.row?.original as LedgerTransaction;
  return (
    <div
      className={cn(
        "text-right w-full",
        original && original.type === "INCOME"
          ? "text-green-500"
          : "text-red-500"
      )}
    >
      {val.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </div>
  );
}
