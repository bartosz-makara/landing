"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("./booking"), {
  ssr: false,
  loading: () => <div className="h-[1000px]" />,
});

export default function CalendlyGate() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button onClick={() => setOpen(true)} className="btn-primary">
          Schedule a call
        </button>
      )}

      {open && <Calendly />}
    </>
  );
}
