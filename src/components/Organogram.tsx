import { cn } from "@/lib/utils";

type NodeProps = {
  title: string;
  subtitle?: string;
  tone?: "primary" | "accent" | "muted";
  className?: string;
};

const Node = ({ title, subtitle, tone = "primary", className }: NodeProps) => (
  <div
    className={cn(
      "relative z-10 rounded-lg border px-4 py-3 text-center shadow-card transition-transform hover:-translate-y-0.5",
      tone === "primary" && "border-primary/20 bg-card text-primary",
      tone === "accent" && "border-accent/40 bg-accent-soft text-primary",
      tone === "muted" && "border-border bg-secondary text-foreground",
      className,
    )}
  >
    <p className="text-sm font-semibold leading-tight md:text-[15px]">{title}</p>
    {subtitle && <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{subtitle}</p>}
  </div>
);

const VLine = ({ className }: { className?: string }) => (
  <div className={cn("mx-auto h-6 w-px bg-primary/30", className)} />
);

const Organogram = () => {
  return (
    <div className="rounded-2xl border border-border bg-gradient-to-b from-secondary/50 to-background p-5 md:p-10">
      <div className="mx-auto max-w-5xl space-y-2">
        {/* Visitor */}
        <Node title="VISITOR" subtitle="Funder / Initiator" tone="accent" className="mx-auto max-w-sm" />
        <VLine />

        {/* Chancellor */}
        <Node title="CHANCELLOR" subtitle="Trustee – GIRDC" className="mx-auto max-w-sm" />
        <VLine />

        {/* Council */}
        <Node title="COUNCIL" subtitle="Pro‑Chancellor / President – GIRDC" className="mx-auto max-w-md" />
        <VLine />

        {/* Senate / VC */}
        <Node title="SENATE / VICE‑CHANCELLOR" subtitle="Female Professor" tone="accent" className="mx-auto max-w-md" />
        <VLine />

        {/* Branching: DVC Admin | Bursary | DVC Academics */}
        <div className="relative">
          {/* horizontal connector line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-0 hidden h-px bg-primary/30 md:block" />
          <div className="grid gap-4 pt-0 md:grid-cols-3 md:gap-6 md:pt-6">
            <div className="space-y-2">
              <VLine className="hidden md:block" />
              <Node title="DVC – ADMINISTRATION" subtitle="Female Professor" />
            </div>
            <div className="space-y-2">
              <VLine className="hidden md:block" />
              <Node title="BURSARY" subtitle="Bursar" tone="muted" />
            </div>
            <div className="space-y-2">
              <VLine className="hidden md:block" />
              <Node title="DVC – ACADEMICS" subtitle="Female Professor" />
            </div>
          </div>
        </div>

        {/* Second tier under DVCs */}
        <div className="grid gap-4 pt-4 md:grid-cols-3 md:gap-6">
          <div className="space-y-2">
            <VLine />
            <Node title="REGISTRY" subtitle="Registrar" tone="muted" />
            <VLine />
            <Node
              title="Non‑Academic Departments"
              subtitle="Deputy Registrars / Directors"
              tone="muted"
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-lg border border-dashed border-primary/30 bg-background/60 px-4 py-6 text-center text-xs text-muted-foreground">
              Bursary supports both<br />Administration & Academics
            </div>
          </div>

          <div className="space-y-2">
            <VLine />
            <Node title="LIBRARY" subtitle="Chief Librarian" tone="muted" />
            <VLine />
            <Node title="FACULTIES" subtitle="Deans / Provosts / Directors" tone="muted" />
            <VLine />
            <Node title="ACADEMIC DEPARTMENTS" subtitle="Heads of Department" tone="muted" />
          </div>
        </div>

        {/* Student body */}
        <VLine />
        <Node title="STUDENT BODY" subtitle="Vulnerable Girl‑Child & Women" tone="accent" className="mx-auto max-w-md" />
      </div>

      <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Proposed Interim Organisational Structure
      </p>
    </div>
  );
};

export default Organogram;
