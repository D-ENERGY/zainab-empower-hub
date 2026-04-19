import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, HeartHandshake, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import crest from "@/assets/zbm-crest.jpg";

const goals = [
  "Tuition‑free education for Vulnerable Girl‑Child and Women.",
  "Access to quality higher education in Nigeria and beyond.",
  "Entrepreneurial and skills acquisition for financial freedom.",
  "Promotion of gender equality in skills education.",
  "Catalysing national economic growth and development.",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,hsl(var(--accent))_0,transparent_40%),radial-gradient(circle_at_80%_60%,hsl(var(--primary-glow))_0,transparent_45%)]" />
        <div className="container relative grid gap-10 py-14 sm:py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div className="animate-fade-in-up relative isolate space-y-5 sm:space-y-6">
            <img
              src={crest}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-[0.09] blur-[1px] sm:h-72 sm:w-72 md:h-80 md:w-80"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary-foreground/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent sm:px-4 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" /> A new university for Nigeria
            </span>
            <h1 className="font-serif text-[2rem] font-bold leading-[1.08] sm:text-4xl md:text-6xl">
              Zainab Bint Muhammad University, <span className="text-accent">Abuja</span>
            </h1>
            <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
              A proposed tuition‑free institution providing higher and entrepreneurial education for the
              Vulnerable Girl‑Child and Women in Nigeria and beyond — in line with best global practices.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/about">Learn about us <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/organogram">View organogram</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto hidden items-center justify-center md:flex">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
            <img
              src={crest}
              alt="Official crest of Zainab Bint Muhammad University, Abuja"
              className="relative h-44 w-44 rounded-full object-cover shadow-elegant ring-4 ring-accent/60 sm:h-64 sm:w-64 md:h-80 md:w-80"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container grid gap-5 py-14 sm:py-20 md:grid-cols-2 md:gap-6">
        <Card className="border-accent/30 shadow-card">
          <CardContent className="space-y-3 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Vision</p>
            <h2 className="font-serif text-xl text-primary sm:text-2xl md:text-3xl">A leading university for the Girl‑Child</h2>
            <p className="text-muted-foreground">
              To be a leading university in the provision of higher and entrepreneurial education for
              Vulnerable Girl‑Child and Women in Nigeria and beyond.
            </p>
          </CardContent>
        </Card>
        <Card className="border-primary/15 bg-secondary shadow-card">
          <CardContent className="space-y-3 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Mission</p>
            <h2 className="font-serif text-xl text-primary sm:text-2xl md:text-3xl">Education that transforms lives</h2>
            <p className="text-muted-foreground">
              To erect structures and create standards strategically towards enhanced education and
              entrepreneurial skills that impact positively on Vulnerable Girl‑Child and Women — aligned with
              best global practices.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Goals */}
      <section className="bg-secondary/60 py-14 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we set out to do</p>
            <h2 className="mt-2 font-serif text-2xl text-primary sm:text-3xl md:text-4xl">Our Goals</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((g, i) => (
              <Card key={i} className="border-border/70 transition-shadow hover:shadow-card">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold font-serif text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">{g}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Initiator */}
      <section className="container grid gap-8 py-16 sm:py-20 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-10">
        <div className="rounded-2xl bg-gradient-hero p-7 text-primary-foreground shadow-elegant sm:p-10">
          <HeartHandshake className="h-10 w-10 text-accent" />
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">Initiator</p>
          <h3 className="mt-2 font-serif text-2xl sm:text-3xl">Sagir Isa, PhD</h3>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Trustee, Grassroots International Research and Development Centre (GIRDC)
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Leadership</p>
          <h2 className="font-serif text-2xl text-primary sm:text-3xl md:text-4xl">A vision rooted in service</h2>
          <p className="text-muted-foreground">
            Initiated under the trusteeship of GIRDC, Zainab Bint Muhammad University is conceived as a
            beacon of opportunity — opening the doors of higher learning and enterprise to those who have
            historically been left behind.
          </p>
          <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-secondary">
            <Link to="/organogram">
              <GraduationCap className="h-4 w-4" /> See the organisational structure
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
