export type LedgerTransaction = {
  date: string;
  description: string;
  to: string;
  from: string;
  amount: number;
  type: "EXPENSE" | "INCOME" | "TRANSFER";
};

export type SummaryDTO = {
  asset: string;
  balance: number;
  children?: SummaryDTO[];
};

export type MonthSummaryDTO = {
  month: number;
  balance: number;
  children?: SummaryDTO[];
};

export type YearSummaryDTO = {
  year: number;
  balance: number;
  children?: MonthSummaryDTO[];
};
