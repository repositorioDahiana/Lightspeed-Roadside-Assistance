import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-[#0C0C0C] text-[#D9D9D9] min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#FFD400] mb-4">
        Fast and Reliable Roadside Assistance ⚡
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-[#D9D9D9] mb-8">
        Connect with certified providers in seconds.  
        Secure payments, real-time tracking, and 24/7 support — wherever you are.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/services"
          className="bg-[#FFD400] text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          View Services
        </Link>
        <Link
          to="/contact"
          className="border border-[#FFD400] text-[#FFD400] font-semibold px-6 py-3 rounded-lg hover:bg-[#FFD400] hover:text-black transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
