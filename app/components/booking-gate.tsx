"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "./button";

const Calendly = dynamic(() => import("./booking"), {
  ssr: false,
  loading: () => <div className="h-[1000px]" />,
});

export default function CalendlyGate() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          className="h-12 w-64 rounded-md"
          color="orange"
        >
          Darmowa konsultacja
        </Button>
      )}

      {open && <Calendly />}
    </>
  );
}
