import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#0C0C0C] border-b border-[#1a1a1a] sticky top-0 z-50 ls-nav-aurora">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/Logo.png"
            alt="Logo LIGHTSPEED Roadside Assistance"
            className="h-12 w-12 object-contain animate-[sway_4s_ease-in-out_infinite]"
          />
          <div className="flex flex-col leading-tight">
            <div className="font-extrabold text-2xl tracking-wide text-white">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--ls-warm-1),var(--ls-cream),var(--ls-cool-1))]">
                LIGHTSPEED
              </span>
            </div>
            <div className="text-[#D9D9D9] text-xs uppercase tracking-wider">
              Roadside Assistance
            </div>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex space-x-8 text-[#D9D9D9] font-medium text-sm uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `ls-navlink transition hover:text-white ${isActive ? "is-active text-white" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `ls-navlink transition hover:text-white ${isActive ? "is-active text-white" : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `ls-navlink transition hover:text-white ${isActive ? "is-active text-white" : ""}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `ls-navlink transition hover:text-white ${isActive ? "is-active text-white" : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA BUTTON */}
        <Link
          to="/contact"
          className="ml-6 ls-cta text-black font-semibold px-5 py-2 rounded-lg transition
                     hover:opacity-95 active:scale-[0.99]
                     shadow-[0_10px_30px_rgba(255,176,0,0.12)]"
        >
          Request Service
        </Link>
      </div>
    </header>
  );
}
