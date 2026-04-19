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
      "relative z-10 rounded-md border px-3 py-2 text-center shadow-card transition-transform hover:-translate-y-0.5",
      tone === "primary" && "border-primary/20 bg-card text-primary",
      tone === "accent" && "border-accent/40 bg-accent-soft text-primary",
      tone === "muted" && "border-border bg-secondary text-foreground",
      className,
    )}
  >
    <p className="text-xs font-semibold leading-tight md:text-sm">{title}</p>
    {subtitle ? (
      <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{subtitle}</p>
    ) : null}
  </div>
);

const Organogram = () => {
  return (
    <div className="rounded-2xl border border-border bg-gradient-to-b from-secondary/50 to-background p-5 md:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-x-auto rounded-xl border border-border/80 bg-card shadow-card">
          <div className="relative mx-auto min-h-[760px] min-w-[900px] bg-card p-4">
              <Node title="VISITOR" subtitle="Funder / Initiator" tone="accent" className="absolute left-[372px] top-[20px] w-[180px]" />
              <Node title="CHANCELLOR" subtitle="Trustee - GIRDC" className="absolute left-[372px] top-[98px] w-[180px]" />
              <Node title="COUNCIL" subtitle="(Pro‑Chancellor) (President - GIRDC)" className="absolute left-[360px] top-[178px] w-[204px]" />
              <Node title="SENATE / VICE‑CHANCELLOR" subtitle="Female Professor" tone="accent" className="absolute left-[330px] top-[262px] w-[264px]" />

              <Node title="DUPUTY VICE‑CHANCELLOR" subtitle="Administration (Female Professor)" className="absolute left-[24px] top-[300px] w-[230px]" />
              <Node title="REGISTRY" subtitle="(Registrar)" tone="muted" className="absolute left-[50px] top-[408px] w-[180px]" />
              <Node title="NON‑ACADEMIC DEPARTMENTS" subtitle="(Deputy Registrars and Directors)" tone="muted" className="absolute left-[10px] top-[500px] w-[260px]" />

              <Node title="BURSARY" subtitle="(Bursar)" tone="muted" className="absolute left-[390px] top-[390px] w-[144px]" />

              <Node title="DEPUTY VICE‑CHANCELLOR" subtitle="Academics (Female Professor)" className="absolute left-[646px] top-[300px] w-[230px]" />
              <Node title="LIBRARY" subtitle="Chief Librarian" tone="muted" className="absolute left-[672px] top-[408px] w-[180px]" />
              <Node title="FACULTIES" subtitle="(Deans / Provosts / Directors)" tone="muted" className="absolute left-[632px] top-[500px] w-[260px]" />
              <Node title="ACADEMIC DEPARTMENTS" tone="muted" className="absolute left-[694px] top-[590px] w-[136px]" />

              <Node title="STUDENT BODY" tone="accent" className="absolute left-[638px] top-[680px] w-[250px]" />
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Proposed Interim Organisational Structure
      </p>
    </div>
  );
};

export default Organogram;
