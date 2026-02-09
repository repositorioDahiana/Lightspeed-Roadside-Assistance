import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0C0C0C] text-[#D9D9D9] border-t border-[#1a1a1a] overflow-hidden">
      
      {/* Aurora / glow suave */}
      <div className="ls-footer-aurora" />

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Logo LIGHTSPEED Roadside Assistance"
            className="h-10 w-10 object-contain animate-[sway_4s_ease-in-out_infinite]"
          />
          <div className="flex flex-col leading-tight">
            <div className="font-extrabold text-xl tracking-wide">
              <span className="ls-gradient-text">
                LIGHTSPEED
              </span>
            </div>
            <p className="text-[#9a9a9a] text-xs uppercase tracking-wider">
              Roadside Assistance
            </p>
          </div>
        </div>

        <div className="border-t border-[#141414] text-center py-4 text-xs text-[#666] relative">
          © {new Date().getFullYear()} Lightspeed. Built for speed.
        </div>

        {/* CONTACT */}
        <div className="text-sm">
          <a
            href="mailto:lightspeedroadside@gmail.com"
            className="ls-footer-email"
          >
            lightspeedroadside@gmail.com
          </a>
        </div>
      </div>
     
    </footer>
  );
}
