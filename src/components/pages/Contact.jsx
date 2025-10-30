export default function Contact() {
    return (
      <section className="bg-[#0C0C0C] text-[#D9D9D9] min-h-screen px-6 py-20 flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold text-[#FFD400] mb-6">Contact Us</h2>
        <p className="max-w-2xl text-lg mb-10">
          Do you have any questions or want to join as a provider?  
          Send us a message and we’ll get back to you as soon as possible
        </p>
  
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully 🚀");
          }}
          className="w-full max-w-lg space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#FFD400] text-[#D9D9D9] placeholder-[#888] outline-none focus:ring-2 focus:ring-[#FFD400]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#FFD400] text-[#D9D9D9] placeholder-[#888] outline-none focus:ring-2 focus:ring-[#FFD400]"
            required
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#FFD400] text-[#D9D9D9] placeholder-[#888] outline-none focus:ring-2 focus:ring-[#FFD400]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#FFD400] text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  
