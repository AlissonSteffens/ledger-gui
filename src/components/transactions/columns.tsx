"use client";

import { LedgerTransaction } from "@/types/ledger";
import { ColumnDef } from "@tanstack/react-table";
import Accountable from "./accountable/accountable";
import Currency from "./currency/currency";
import TransactionType from "./transaction_type/transaction_type";

export const columns: ColumnDef<LedgerTransaction>[] = [
  {
    accessorKey: "type",
    header: "Typo",
    cell: (value) => {
      const val: string = "" + value.getValue() ?? "";
      return <TransactionType value={val} />;
    },
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "from",
    header: "De",
    cell: (value) => {
      const val: string = "" + value.getValue() ?? "";
      return <Accountable value={val} />;
    },
  },
  {
    accessorKey: "to",
    header: "Para",
    cell: (value) => {
      const val: string = "" + value.getValue() ?? "";
      return <Accountable value={val} />;
    },
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: (value) => <Currency value={value.getValue()} v={value}/>,
  },
];
