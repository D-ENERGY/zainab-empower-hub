import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import crest from "@/assets/zbm-crest.jpg";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/organogram", label: "Organogram" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={crest} alt="Zainab Bint Muhammad University crest" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/50" />
          <div className="leading-tight">
            <p className="font-serif text-base font-semibold text-primary md:text-lg">Zainab Bint Muhammad</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-xs">University · Abuja</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-secondary text-primary" : "text-foreground/75 hover:bg-secondary hover:text-primary",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-3 text-sm font-medium",
                    isActive ? "bg-secondary text-primary" : "text-foreground/80",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
