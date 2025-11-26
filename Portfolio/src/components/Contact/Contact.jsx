import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Contact() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const validate = () => {
    if (name.trim().length < 3) {
      setError("Please enter a proper name (at least 3 characters).");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromEmail.trim())) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (message.trim().length < 10) {
      setError("Please write at least 10 characters in your message.");
      return false;
    }
    setError(null);
    return true;
  };

  const buildMailtoLink = () => {
    const to = "kh419368@gmail.com"; // your email
    const subject = encodeURIComponent("Portfolio contact from website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="min-h-screen w-full bg-black text-white relative overflow-hidden pt-28 pb-12 px-4">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(252,211,77,0.10),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-64 h-48 rounded-full bg-yellow-500/10 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-56 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-2 h-48 bg-yellow-300/10 rounded-xl rotate-45 blur-lg"></div>
      </div>
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-400/20 rounded-lg rotate-12 animate-pulse-slow z-10"></div>
      <div className="absolute bottom-28 -right-8 w-20 h-20 border-2 border-cyan-200/20 rounded-2xl -rotate-12 animate-pulse-slow z-10"></div>
      <div className="absolute top-1/2 left-4 w-16 h-16 border border-white/10 rounded-xl rotate-6 z-10"></div>
      <div className="absolute top-1/2 left-50 w-20 h-20 border border-white/10 rounded-xl rotate-8 z-10"></div>
      <div className="absolute top-[35%] right-8 w-32 h-6 border border-pink-400/10 rounded-xl -rotate-6"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-10 border border-fuchsia-300/15 rounded-md rotate-3 pointer-events-none"></div>
      <div className="absolute top-10 right-5 w-8 h-32 border border-blue-400/15 rounded-lg rotate-12"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-white/5 rounded-xl -rotate-12"></div>

      <div className="relative z-10 max-w-xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400 text-center mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          I'm always open for collaboration, freelancing, and web projects.
          <br />
          Connect through links below or send me a message via your email client. 👇🏼
        </p>

        {/* Social links */}
        <div className="mb-10 flex flex-wrap gap-7 justify-center items-center">
          <a
            href="https://www.instagram.com/_____himanshu_____1723/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-pink-400 text-3xl transition"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-kumar-s-a434372b7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-blue-400 text-3xl transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HimanshuKumarShahi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-gray-300 text-3xl transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kh419368@gmail.com"
            className="text-orange-400 hover:text-yellow-500 text-3xl transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Download resume */}
        <div className="flex justify-center mt-10 mb-10 relative z-10">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-black font-semibold rounded-xl border-2 border-orange-500 hover:bg-black hover:text-orange-400 hover:border-orange-400 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FiDownload className="text-xl" />
            Download Resume
          </a>
        </div>

        {/* Contact form card */}
        <div className="bg-black/70 border border-orange-500/20 rounded-2xl shadow-xl p-8">
          {error && (
            <div className="mb-6 rounded-lg px-4 py-3 text-sm bg-red-500/10 border border-red-400/60 text-red-300">
              <p className="font-semibold">Please check the form</p>
              <p className="text-xs mt-1">{error}</p>
            </div>
          )}

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (!validate()) return;

              // open user email client
              window.location.href = buildMailtoLink();

              // clear fields
              setName("");
              setFromEmail("");
              setMessage("");
            }}
          >
            <div>
              <label className="block text-orange-400 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-black/60 border border-orange-500/50 text-white focus:outline-none focus:border-orange-400"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-orange-400 font-semibold mb-1">
                Your Email
              </label>
              <input
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-black/60 border border-orange-500/50 text-white focus:outline-none focus:border-orange-400"
                placeholder="Your email address"
                required
              />
            </div>

            <div>
              <label className="block text-orange-400 font-semibold mb-1">
                Message
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-black/60 border border-orange-500/50 text-white focus:outline-none focus:border-orange-400 resize-none"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                w-full py-3
                bg-black 
                text-orange-400 
                font-bold 
                rounded-lg 
                border-2 border-orange-400
                transition-all duration-200
                hover:bg-orange-500
                hover:text-black
                hover:border-orange-500
                hover:scale-105
              "
            >
              Send Message via Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
