import type { ReactNode } from "react";

export function PageShell(props: { title: string; lead?: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
      <header className="max-w-3xl">
        <h1 className="font-serif text-4xl leading-tight text-ink">{props.title}</h1>
        {props.lead ? <p className="mt-4 text-lg leading-8 text-ink/70">{props.lead}</p> : null}
      </header>
      <div className="mt-10">{props.children}</div>
    </div>
  );
}
