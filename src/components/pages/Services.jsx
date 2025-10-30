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
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-[#FFD400]">Our Services</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Lightspeed offers fast and reliable roadside assistance —  
          with just one click, get the support you need.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((srv) => (
          <div
            key={srv.title}
            className="border border-[#1a1a1a] p-6 rounded-xl hover:border-[#FFD400] transition"
          >
            <h3 className="text-xl font-semibold text-[#FFD400] mb-2">
              {srv.title}
            </h3>
            <p className="text-[#D9D9D9]/90">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
