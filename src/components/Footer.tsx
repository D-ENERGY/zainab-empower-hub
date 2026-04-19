import { Link } from "react-router-dom";
import crest from "@/assets/zbm-crest.jpg";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src={crest} alt="ZBM University crest" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/60" />
            <div>
              <p className="font-serif text-lg font-semibold">Zainab Bint Muhammad University</p>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Abuja, Nigeria</p>
            </div>
          </div>
          <p className="max-w-sm text-sm text-primary-foreground/75">
            A proposed university dedicated to tuition‑free higher and entrepreneurial education for the
            Vulnerable Girl‑Child and Women in Nigeria and beyond.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-base text-accent">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About the University</Link></li>
            <li><Link to="/organogram" className="hover:text-accent">Organisational Structure</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-base text-accent">Initiator</h4>
          <p className="text-sm text-primary-foreground/80">
            Sagir Isa, PhD<br />
            Trustee, Grassroots International Research and Development Centre (GIRDC)
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Zainab Bint Muhammad University, Abuja. All rights reserved.</p>
          <p>An initiative of GIRDC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
