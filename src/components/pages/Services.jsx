import { Link } from "react-router-dom";

const services = [
  { title: "Vehicle Towing", desc: "For light and heavy vehicles." },
  { title: "Jump Start", desc: "Quick and safe battery boost in minutes." },
  { title: "Tire Change", desc: "Fast, efficient, and reliable tire service." },
  { title: "Fuel Delivery", desc: "We deliver gas or diesel wherever you are." },
  { title: "Lockout Service", desc: "Professional and secure vehicle unlocking." },
  { title: "Winch Rescue", desc: "For stuck or off-road vehicles." },
];

export default function Services() {
  return (
    <section className="bg-[#0C0C0C] text-[#D9D9D9] min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="ls-services-layout-top">
          {/* LEFT: Title + text + cards */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-white">Fast solutions,</span>
              <br />
              <span className="ls-gradient-text">right when you need them.</span>
            </h2>

            <p className="mt-4 text-lg text-[#BDBDBD] max-w-2xl">
              Lightspeed offers fast and reliable roadside assistance. One click
              and help is already on the way.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {services.map((srv) => (
                <div key={srv.title} className="ls-service-card">
                  <h3 className="ls-service-title">{srv.title}</h3>
                  <p className="text-[#BDBDBD] text-sm mt-2">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image aligned with title */}
          <div className="ls-services-image-wrap">
            <div className="ls-services-image-label">Roadside assistance in action</div>

            <img src="/Service.png" alt="Roadside assistance in action" className="ls-services-image" />

            <div className="ls-glow" />
            <div className="ls-speedlines" />

            <Link to="/contact" className="ls-services-cta-inside">
              Request Immediate Help
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
