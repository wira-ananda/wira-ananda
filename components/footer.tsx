import React from "react";
import { contentWidth } from "./HomePage";

export default function Footer() {
  return (
    <footer className="">
      <div className={`${contentWidth} mx-auto border-x text-sm `}>
        <div className="flex px-4 py-2 justify-center">
          © 2026 Wira Ananda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
