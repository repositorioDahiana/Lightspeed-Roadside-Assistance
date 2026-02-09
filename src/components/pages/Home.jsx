import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-[#0C0C0C] text-[#D9D9D9] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-16">
        <div className="ls-hero-grid">
          {/* LEFT */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a] bg-black/40 px-3 py-1 text-xs text-[#D9D9D9] ls-badge">
              <span className="ls-dot" />
              24/7 Service Active
            </div>

            {/* Title */}
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              <span className="text-white">Getting </span>{" "}
              <span className="text-[#BDBDBD]">you back on</span>
              <br />
              <span className="ls-gradient-text">the road fast</span>{" "}
              <span className="ls-gradient-text">and</span>{" "}
              <span className="ls-gradient-text">safely.</span>
            </h1>

            {/* Body */}
            <p className="mt-5 max-w-xl text-base md:text-lg text-[#BDBDBD] leading-relaxed">
            Immediate solutions for roadside problems. From tire changes to towing, 
            we arrive fast to get you peace of mind again.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link to="/contact" className="ls-btn-primary">
                Request Help
              </Link>

              <Link to="/services" className="ls-btn-secondary">
                View Services
              </Link>
            </div>

            {/* Microproof */}
            <div className="mt-6 text-xs text-[#8f8f8f]">
              Fast response • Verified technicians • 24/7 support
            </div>
          </div>

          {/* RIGHT */}
          <div className="ls-hero-media">
            <div className="ls-hero-card">
              <img
                src="/Home.png"
                alt="Lightspeed Roadside Assistance"
                className="ls-hero-img"
              />
              {/* overlay “speed lines” */}
              <div className="ls-speedlines" />
              {/* soft glow */}
              <div className="ls-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
