import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#1a1a1a] text-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LOGO + NAME */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo.jpg"
            alt="Logo LIGHTSPEED Roadside Assistance"
            className="h-10 w-10 object-contain animate-[sway_4s_ease-in-out_infinite]"
          />
          <div className="flex flex-col">
            <div className="text-[#FFD400] font-extrabold text-xl tracking-wide">
              LIGHTSPEED
            </div>
            <p className="text-[#D9D9D9] text-sm uppercase">
              Roadside Assistance
            </p>
          </div>
        </div>

        {/* EMAIL */}
        <nav className="flex items-center">
          <a
            href="mailto:lightspeedroadside@gmail.com"
            className="text-[#D9D9D9] font-semibold text-sm hover:text-[#FFD400] transition"
          >
            lightspeedroadside@gmail.com
          </a>
        </nav>

        {/* COPYRIGHT */}
        <p className="text-xs text-[#888] text-center md:text-right">
          © {new Date().getFullYear()} Lightspeed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
