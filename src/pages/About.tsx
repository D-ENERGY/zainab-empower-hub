import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import crest from "@/assets/zbm-crest.jpg";

const goals = [
  "To provide tuition‑free education for Vulnerable Girl‑Child and Women in Nigeria and beyond.",
  "To provide access to quality education for Vulnerable Girl‑Child and Women in Nigeria and beyond.",
  "To provide entrepreneurial and skills acquisition education for financial freedom of Girl‑Child and Vulnerable Women in Nigeria and beyond.",
  "To promote gender equality in entrepreneurial and skills acquisition education.",
  "To promote National Economic Growth and Development.",
];

const About = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-hero py-14 text-primary-foreground sm:py-20">
        <div className="container relative isolate max-w-3xl text-center">
          <img
            src={crest}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-[0.09] blur-[1px] sm:h-72 sm:w-72"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About</p>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl">Zainab Bint Muhammad University, Abuja</h1>
          <p className="mt-5 text-primary-foreground/80">
            A proposed institution committed to tuition‑free higher and entrepreneurial education for the
            Vulnerable Girl‑Child and Women in Nigeria and beyond.
          </p>
        </div>
      </section>

      <section className="container grid gap-6 py-16 md:grid-cols-2">
        <Card className="border-accent/30">
          <CardContent className="space-y-4 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Vision</p>
            <h2 className="font-serif text-3xl text-primary">Vision</h2>
            <p className="text-muted-foreground">
              To be a leading University in the provision of Higher and Entrepreneurial Education for
              Vulnerable Girl‑Child and Women in Nigeria and beyond.
            </p>
          </CardContent>
        </Card>
        <Card className="border-primary/15 bg-secondary">
          <CardContent className="space-y-4 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Mission</p>
            <h2 className="font-serif text-3xl text-primary">Mission</h2>
            <p className="text-muted-foreground">
              To erect structures and create standards strategically towards the provision of enhanced
              education and entrepreneurial skills that would impact positively on Vulnerable Girl‑Child and
              Women in Nigeria and beyond, in line with best global practices on education.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container py-12">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we aim to achieve</p>
          <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">Our Goals</h2>
        </div>
        <ul className="mx-auto max-w-3xl space-y-4">
          {goals.map((g, i) => (
            <li key={i} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-card">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-foreground">{g}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container py-16">
        <div className="rounded-2xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Initiator</p>
          <h2 className="mt-2 font-serif text-4xl">Sagir Isa, PhD</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            Sagir Isa, PhD (Trustee, Grassroots International Research and Development Centre)
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
