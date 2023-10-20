import { ArrowRight } from "lucide-react";

export default function Accountable({ value }: { value: string }) {
  const splited = value.split(":");
  const ignoreFirstN = splited[0] === "Assets" ? 2 : 1;
  const items = splited.slice(ignoreFirstN);

  return (
    <div className="flex flex-row w-full gap-2">
      {items.map((item, index) => {
        return (
          <>
            <div key={index} className="bg-slate-100 p-1">
              <div className="text-left">{item}</div>
            </div>
            {index < items.length - 1 && (
              <div className="flex items-center justify-center">
                <div className="text-gray-500">
                  <ArrowRight size={12} />
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
