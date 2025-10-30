import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#0C0C0C] border-b border-[#1a1a1a] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/Logo.jpg"
            alt="Logo LIGHTSPEED Roadside Assistance"
            className="h-10 w-10 object-contain animate-[sway_4s_ease-in-out_infinite]"
          />
          <div className="flex items-center space-x-2">
            <div className="text-[#FFD400] font-extrabold text-2xl tracking-wide">
              LIGHTSPEED
            </div>
            <div className="text-[#D9D9D9] text-sm uppercase tracking-wider">
              Roadside Assistance
            </div>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex space-x-8 text-[#D9D9D9] font-medium text-sm uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#FFD400] transition ${
                isActive ? "text-[#FFD400]" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[#FFD400] transition ${
                isActive ? "text-[#FFD400]" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-[#FFD400] transition ${
                isActive ? "text-[#FFD400]" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[#FFD400] transition ${
                isActive ? "text-[#FFD400]" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA BUTTON */}
        <Link
          to="/contact"
          className="ml-6 bg-[#FFD400] text-black font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition"
        >
          Request Service
        </Link>
      </div>
    </header>
  );
}
