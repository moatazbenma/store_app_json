import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Optional backend endpoint — you can adjust or log it for now
      await axios.post("http://localhost:5000/api/contact", form);
      setStatus("Message sent successfully! ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white text-center py-16 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Contact Us</h1>
        <p className="text-indigo-100 mt-3 text-lg">
          We'd love to hear from you! Feel free to ask questions, share feedback, or get support.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send us a Message</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="mt-6 text-center font-medium text-gray-600 animate-pulse">
            {status}
          </p>
        )}
      </div>

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Ways to Reach Us</h3>
        <p className="text-gray-600">
          📧 Email: <span className="font-medium text-indigo-600">support@mystore.com</span>
        </p>
        <p className="text-gray-600 mt-2">
          📞 Phone: <span className="font-medium text-indigo-600">+62 812-3456-7890</span>
        </p>
        <p className="text-gray-600 mt-2">
          📍 Address: <span className="font-medium text-indigo-600">Jakarta, Indonesia</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
