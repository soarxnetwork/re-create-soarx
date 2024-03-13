import { cn } from "@/lib/utils";
import React from "react";

interface AdvantageCardProps {
  color: string;
  title: string;
  icon: string;
}

const AdvantageCard = ({ color, title, icon }: AdvantageCardProps) => {
  return (
    <div
      className={cn(
        `space-y-4 fl-col-ic justify-center text-center py-6 w-[321px] h-[234px] p-4 rounded-xl  `
      )}
      style={{ backgroundColor: color }}
    >
      <span className=" text-3xl">{icon}</span>
      <p className="text-xl font-semibold">{title}</p>
    </div>
  );
};

export default AdvantageCard;
