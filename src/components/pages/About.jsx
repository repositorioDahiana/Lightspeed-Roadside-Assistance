export default function About() {
  return (
    <section className="bg-[#0C0C0C] text-[#D9D9D9] min-h-screen px-6 py-20 flex flex-col items-center text-center">
      <h2 className="text-4xl font-extrabold text-[#FFD400] mb-6">About Us</h2>
      <p className="max-w-3xl text-lg leading-relaxed">
        At <span className="text-[#FFD400] font-semibold">Lightspeed</span>, we
        transform traditional roadside assistance into a fast, transparent, and
        reliable experience.  
        Our mission is to connect users with verified providers in real time,
        ensuring safety, traceability, and 24/7 support.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl">
        <div className="border border-[#1a1a1a] p-6 rounded-xl hover:border-[#FFD400] transition">
          <h3 className="text-xl font-semibold text-[#FFD400] mb-2">🚗 Speed</h3>
          <p>Find help in just minutes — wherever you are.</p>
        </div>
        <div className="border border-[#1a1a1a] p-6 rounded-xl hover:border-[#FFD400] transition">
          <h3 className="text-xl font-semibold text-[#FFD400] mb-2">🔒 Safety</h3>
          <p>All our providers are verified and insured for your peace of mind.</p>
        </div>
        <div className="border border-[#1a1a1a] p-6 rounded-xl hover:border-[#FFD400] transition">
          <h3 className="text-xl font-semibold text-[#FFD400] mb-2">🕓 Availability</h3>
          <p>24/7 assistance, 365 days a year — always ready to help.</p>
        </div>
      </div>
    </section>
  );
}
