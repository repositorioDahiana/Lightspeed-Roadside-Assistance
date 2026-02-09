import { Link } from "react-router-dom";

const reasons = [
  {
    title: "Fast Response",
    desc: "We know your time matters. Our driver network ensures the shortest wait times.",
  },
  {
    title: "Total Peace of Mind",
    desc: "Verified professionals and transparent pricing. No surprises, only solutions.",
  },
  {
    title: "Wide Coverage",
    desc: "Wherever you are, we arrive. Highways, cities, or secondary roads.",
  },
];

export default function About() {
  return (
    <section className="bg-[#0C0C0C] text-[#D9D9D9] px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            WHY CHOOSE LSR
        ===================================================== */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-white">Why choose </span>
            <span className="ls-gradient-text">LSR</span>
            <span className="text-white">?</span>
          </h2>

          <p className="mt-4 text-lg text-[#BDBDBD] leading-relaxed">
            We transform roadside assistance into a fast, transparent, and
            reliable experience. Real-time connections, verified providers,
            and support whenever you need it.
          </p>
        </div>

        <div className="mt-12 ls-about-layout">
          {/* IMAGE */}
          <div className="ls-about-media">
            <div className="ls-about-image-wrap">
              <img
                src="/About.png"
                alt="Lightspeed roadside assistance"
                className="ls-about-image"
              />
              <div className="ls-glow" />
              <div className="ls-speedlines" />
            </div>
          </div>

          {/* REASONS */}
          <div className="ls-about-reasons">
            {reasons.map((item) => (
              <div key={item.title} className="ls-about-item">
                <div className="ls-about-icon" />
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#BDBDBD] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="ls-btn-primary">
                Request Help
              </Link>
              <Link to="/services" className="ls-btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            ABOUT US BLOCK
        ===================================================== */}
        <div className="mt-24 flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold">
            <span className="text-white">About </span>
            <span className="ls-gradient-text">Us</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#BDBDBD]">
            At <span className="text-white font-semibold">Lightspeed</span>, we
            transform traditional roadside assistance into a fast, transparent,
            and reliable experience. Our mission is to connect users with
            verified providers in real time, ensuring safety, traceability,
            and 24/7 support.
          </p>

          {/* pillars */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl w-full">
            <div className="ls-about-pill">
              <h3 className="ls-about-pill-title">Speed</h3>
              <p className="text-[#BDBDBD] text-sm mt-2">
                Find help in just minutes — wherever you are.
              </p>
            </div>

            <div className="ls-about-pill">
              <h3 className="ls-about-pill-title">Safety</h3>
              <p className="text-[#BDBDBD] text-sm mt-2">
                All our providers are verified and insured for your peace of mind.
              </p>
            </div>

            <div className="ls-about-pill">
              <h3 className="ls-about-pill-title">Availability</h3>
              <p className="text-[#BDBDBD] text-sm mt-2">
                24/7 assistance, 365 days a year — always ready to help.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
