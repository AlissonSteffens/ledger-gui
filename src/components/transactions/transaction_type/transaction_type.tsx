import React from "react";
import { Plus, Minus } from "lucide-react";

export default function TransactionType({ value }: { value: string }) {
  if (value === "INCOME") {
    return <Plus className="text-green-500" />;
  }
  return (
    <div className="text-red-500">
      <Minus />
    </div>
  );
}
