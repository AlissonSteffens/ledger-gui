import { cn } from "@/lib/utils";
import { SummaryDTO } from "@/types/ledger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Summary({
  summary,
  level,
}: {
  summary: SummaryDTO;
  level: number;
}) {
  if (summary.children) {
    return (
      summary && (
        <AccordionItem
          value={summary.asset + level.toString()}
          className="w-full p-0 border-none"
        >
          <AccordionTrigger
            className="p-0 border-none hover:bg-gray-300 rounded-md"
            style={{
              opacity: 1 - level * 0.15,
            }}
          >
            <div
              className={cn(
                "flex justify-between gap-3  cursor-pointer p-1  w-full"
              )}
            >
              <p className="text-sm">{summary.asset}</p>
              <p
                className={cn(
                  "text-sm",
                  summary.balance < 0 ? "text-red-500" : "text-green-950"
                )}
              >
                {summary.balance.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  // only 2 decimal places
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="w-full pl-7">
            {summary.children && (
              <Accordion type="multiple" className="w-full">
                {summary.children.map((s: SummaryDTO) => (
                  <Summary key={s.asset} summary={s} level={level + 1} />
                ))}
              </Accordion>
            )}
          </AccordionContent>
        </AccordionItem>
      )
    );
  } else {
    return (
      summary && (
        <div
          className={cn(
            "flex justify-between gap-3 hover:bg-gray-300 cursor-pointer p-1 rounded-md w-full pr-4"
          )}
          style={{
            opacity: 1 - level * 0.15,
          }}
        >
          <p className="text-sm">{summary.asset}</p>
          <p
            className={cn(
              "text-sm",
              summary.balance < 0 ? "text-red-500" : "text-green-950"
            )}
          >
            {summary.balance.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              // only 2 decimal places
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      )
    );
  }
}
