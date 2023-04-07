import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};
export default function Panel({ children }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </section>
  );
}
