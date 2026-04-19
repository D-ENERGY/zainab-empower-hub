import Layout from "@/components/Layout";
import OrganogramChart from "@/components/Organogram";
import crest from "@/assets/zbm-crest.jpg";

const OrganogramPage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-hero py-12 text-primary-foreground sm:py-16">
        <div className="container relative isolate max-w-3xl text-center">
          <img
            src={crest}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-[0.09] blur-[1px] sm:h-64 sm:w-64"
          />
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
        <div className="mx-auto mt-5 max-w-3xl rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-center text-sm font-medium text-foreground">
          For full view of the organogram, please use a desktop device or{" "}
          <a
            href={`${import.meta.env.BASE_URL}organogram-document.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-2"
          >
            download the Organogram document file
          </a>
          .
        </div>

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
