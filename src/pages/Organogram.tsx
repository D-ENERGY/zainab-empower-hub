import Layout from "@/components/Layout";
import OrganogramChart from "@/components/Organogram";

const OrganogramPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero py-12 text-primary-foreground sm:py-16">
        <div className="container max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Governance</p>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl">Organisational Structure</h1>
          <p className="mt-4 text-primary-foreground/80">
            Proposed interim organogram for Zainab Bint Muhammad University, Abuja — outlining the line of
            authority from the Visitor down to the Student Body.
          </p>
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <OrganogramChart />
        <p className="mt-5 text-center text-sm font-medium text-muted-foreground">
          For full view of the organogram, please use a desktop device.
        </p>

        <div className="mx-auto mt-12 max-w-3xl space-y-3 text-sm text-muted-foreground">
          <h3 className="font-serif text-xl text-primary">Notes on the structure</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>The <strong className="text-foreground">Visitor</strong> serves as the Funder/Initiator of the University.</li>
            <li>The <strong className="text-foreground">Chancellor</strong> is a Trustee of GIRDC.</li>
            <li>The <strong className="text-foreground">Council</strong> is led by the Pro‑Chancellor / President of GIRDC.</li>
            <li>The <strong className="text-foreground">Vice‑Chancellor</strong> and Deputy Vice‑Chancellors are Female Professors, in keeping with the University's mission.</li>
            <li>The <strong className="text-foreground">Bursary</strong> serves both the Administrative and Academic arms of the University.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default OrganogramPage;
