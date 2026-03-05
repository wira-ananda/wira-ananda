import React from "react";
import { contentWidth, EmptySection } from "./HomePage";

export default function Journey() {
  return (
    <section>
      <div className={`${contentWidth} mx-auto border-x text-sm`}>
        <div className={`flex justify-between items-center w-full px-4`}>
          <h1 className={`text-2xl font-semibold `}>Journey</h1>
        </div>{" "}
      </div>
      <EmptySection />
    </section>
  );
}
