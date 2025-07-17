import { cn } from "@/src/lib/utils";
import React from "react";

const SectionHeader = ({
  tittle,
  desc,
  dark,
}: {
  tittle: string;
  desc: string;
  dark?: boolean;
}) => {
  return (
    <>
      <h2 className={cn("section-header", dark && "text-white")}>{tittle}</h2>
      <p className={cn("text-sm md:text-lg lg:text-xl max-w-3xl mx-auto", dark ? "text-slate-300":"text-secondary")}>
        {desc}
      </p>
    </>
  );
};

export default SectionHeader;
