// components/CTA.jsx
export default function CTA() {
  return (
    <section id="cta" className="py-16 px-4">
      <div className="relative max-w-5xl mx-auto">
        {/* Glow behind the card */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -inset-4 rounded-2xl blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(235,192,45,0.4) 0%, transparent 70%)",
          }}
        />

        {/* Actual CTA card */}
        <div className="relative bg-black rounded-2xl p-14 flex flex-col md:flex-row items-center justify-between">
          {/* Text */}
          <div className="md:flex-1 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">
              Ready to Transform Your Website?
            </h2>
            <p className="text-gray-300 max-w-md">
              Let’s build a site that works as hard as you do. Book a free discovery
              call and take the first step toward a faster, smarter online presence.
            </p>
          </div>

          {/* Button */}
          <a
            href="#"
            className="inline-block bg-primary px-8 py-3 rounded-xl text-lg font-bold text-white  transform duration-200 ease-out hover:scale-115 hover:bg-primary transition"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}