import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-28 pb-24 relative overflow-hidden bg-black">


      <div className="relative z-20 text-center max-w-3xl">
        <p className="text-gray-300 text-sm tracking-widest">
          Welcome to my universe
        </p>

        <h1 className="text-white text-4xl md:text-6xl font-extrabold mt-2 leading-tight">
          I’m <span className="text-yellow-400">Himanshu</span>,
          <br />
          <span className="text-gray-200">BCA Student & Tech Explorer</span>
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Coding, learning, and stepping fearlessly into the future like light entering space.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition">
            Explore Work
          </button>

          <button className="px-6 py-3 border border-yellow-500 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition">
            Contact Me
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
