import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="min-h-screen w-full bg-black text-white relative overflow-hidden pt-28 pb-12 px-4">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(252,211,77,0.07),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-orange-500/10 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-72 rounded-full bg-orange-300/8 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400 text-center mb-4">
          Contact Me
        </h2>

        <p className="text-lg text-gray-300 text-center mb-8">
          I'm always open for collaboration, freelancing, and web projects.<br />
          Find me on social or send a direct message below!
        </p>

        {/* Social Icons */}
        <div className="mb-10 flex flex-wrap gap-7 justify-center items-center">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-pink-400 text-3xl transition"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-blue-400 text-3xl transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-gray-300 text-3xl transition"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:your@email.com"
            className="text-orange-400 hover:text-yellow-500 text-3xl transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Resume Button */}
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

        {/* Contact Form */}
        <div className="bg-black/70 border border-orange-500/20 rounded-2xl shadow-xl p-8">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for reaching out!");
            }}
          >
            <div>
              <label className="block text-orange-400 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-md bg-black/60 border border-orange-500/50 text-white focus:outline-none focus:border-orange-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-orange-400 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-md bg-black/60 border border-orange-500/50 text-white focus:outline-none focus:border-orange-400"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-orange-400 font-semibold mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-black/60 border border-orange-500/50 text-white focus:outline-none focus:border-orange-400 resize-none"
                placeholder="Type your message here..."
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
  Send Message
</button>

          </form>
        </div>

      </div>
    </section>
  );
}
