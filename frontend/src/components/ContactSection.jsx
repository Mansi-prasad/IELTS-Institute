import { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const API_URL = `${import.meta.env.VITE_BACKEND_API}/api/contact`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(API_URL, formData);
      console.log("res: ", res);
      if (res.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-950 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
