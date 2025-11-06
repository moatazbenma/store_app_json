function About() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white text-center py-20 shadow-md">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
          Your one-stop destination for premium tech products at unbeatable prices.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At <span className="text-indigo-600 font-semibold">Mtz Store</span>, we aim to make technology
          accessible to everyone — combining top-quality gadgets, honest pricing, and reliable service.
          Our mission is to simplify your tech shopping experience and bring you closer to innovation.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 border border-gray-100 transition-transform transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">🌍 Global Vision</h3>
          <p className="text-gray-600">
            We source the latest and best tech from around the world to ensure our customers always stay ahead.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 border border-gray-100 transition-transform transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">⚡ Fast & Reliable</h3>
          <p className="text-gray-600">
            With quick shipping, responsive support, and secure payments, your experience is always smooth.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 border border-gray-100 transition-transform transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">💎 Quality Guaranteed</h3>
          <p className="text-gray-600">
            Every product in our store is carefully verified for performance and authenticity.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto mt-20 px-6 text-center">

      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Want to collaborate or learn more?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all transform hover:scale-105"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default About;
