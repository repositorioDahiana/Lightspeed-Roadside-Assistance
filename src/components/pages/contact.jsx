import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="bg-[#0C0C0C] text-[#D9D9D9] px-6 py-20">
      <div className="max-w-7xl mx-auto ls-contact-layout">

        {/* LEFT – IMAGE */}
        <div className="ls-contact-media">
          <div className="ls-contact-image-wrap">
            <img
              src="/Contac.png"
              alt="Lightspeed roadside support"
              className="ls-contact-image"
            />
            <div className="ls-glow" />
            <div className="ls-speedlines" />
          </div>
        </div>

        {/* RIGHT – INFO */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-white">Get in </span>
            <span className="ls-gradient-text">Touch</span>
          </h2>

          <p className="mt-6 text-lg text-[#BDBDBD] max-w-xl">
            Need immediate roadside assistance or want to become a provider?
            Our team is ready to help you anytime.
          </p>

          {/* CARDS */}
          <div className="mt-10 flex flex-col gap-5">

            {/* PHONE */}
            <div className="ls-contact-card">
              <div className="ls-contact-icon" />
              <div>
                <p className="ls-contact-label">Call Us</p>
                <a href="tel:000000000" className="ls-contact-value">
                  000 000 000
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="ls-contact-card">
              <div className="ls-contact-icon" />
              <div>
                <p className="ls-contact-label">Email</p>
                <a
                  href="mailto:lightspeedroadside@gmail.com"
                  className="ls-contact-value"
                >
                  lightspeedroadside@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link to="/services" className="ls-btn-primary">
              View Available Services
            </Link>
          </div>

          <div className="mt-6 text-xs text-[#777]">
            24/7 availability • Fast response • Verified providers
          </div>
        </div>

      </div>
    </section>
  );
}
