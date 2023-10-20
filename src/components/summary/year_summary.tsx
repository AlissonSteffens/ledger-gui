import { MonthSummaryDTO, SummaryDTO, YearSummaryDTO } from "@/types/ledger";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem } from "../ui/accordion";
import Summary from "./summary";
import { cn } from "@/lib/utils";

function numberToMonth(num: number) {
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[num];
}

export default function YearSummary({ summary }: { summary: YearSummaryDTO }) {
  return (
    summary &&
    summary.children && (
      <div className="py-5 w-full m-3">
        <Accordion type="multiple" className="w-full">
          {summary.children.map((monthSummary: MonthSummaryDTO) => (
            <AccordionItem value={monthSummary.month.toString()}>
              <AccordionTrigger className="w-full">
                <h2 className="text-2xl flex justify-between gap-3 w-full">
                  <span>{numberToMonth(monthSummary.month)} </span>
                  <span
                    data-a={Number(monthSummary.balance)}
                    className={cn(
                      Number(monthSummary.balance) < 0
                        ? "text-red-500"
                        : "text-slate-950"
                    )}
                  >
                    {monthSummary.balance.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      // only 2 decimal places
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {monthSummary.children &&
                  monthSummary.children.map((s: SummaryDTO) => (
                    <Summary summary={s} level={1} />
                  ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  );
}
