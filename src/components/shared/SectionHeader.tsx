import React from "react";

const SectionHeader = ({ tittle, desc }: { tittle: string; desc: string }) => {
  return (
    <>
      <h2 className="section-header">{tittle}</h2>
      <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
        {desc}
      </p>
    </>
  );
};

export default SectionHeader;
