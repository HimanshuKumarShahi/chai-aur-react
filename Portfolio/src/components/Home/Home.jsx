import React from "react";

function Home() {
  return (
    <section className="min-h-[calc(100vh-120px)] bg-gray-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Banner */}
        <div className="h-40 md:h-52  from-blue-500 to-blue-700 relative">
          
          {/* Profile Image */}
          <img
            src="/your-photo.png"
            alt="Himanshu"
            className="
              absolute 
              -bottom-12 
              left-6 
              w-28 h-28 
              md:w-36 md:h-36 
              rounded-full 
              border-4 
              border-white 
              shadow-xl
            "
          />
        </div>

        {/* Profile Info */}
        <div className="px-6 mt-16 pb-8">

          <h1 className="text-3xl md:text-4xl font-bold">Himanshu Shahi</h1>
          <p className="text-gray-700 text-sm md:text-base mt-1">
            Full Stack Developer | BCA Student | Defence Aspirant
          </p>

          <p className="text-gray-500 text-sm mt-2">
            I blend logic with creativity to build clean UI, modern web apps, and smooth backend systems.
          </p>

          {/* Stats / links */}
          <div className="flex flex-wrap gap-6 mt-5 text-sm md:text-base">
            <span className="text-blue-600 font-semibold cursor-pointer">
              120 connections
            </span>

            <a 
              href="mailto:#" 
              className="text-gray-700 hover:text-blue-600"
            >
              Contact Info
            </a>
          </div>

          {/* Featured buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Open to Work
            </button>

            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Add Section
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
