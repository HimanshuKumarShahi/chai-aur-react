import React from "react";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400">
            About Us
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We build modern web experiences
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              that people love to use.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Passionate developers creating fast, beautiful and scalable
            applications with modern technologies.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/11035468/pexels-photo-11035468.jpeg"
                alt="Developer working on a laptop"
                className="h-[420px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[500px]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-sm text-slate-300">
                    "Good software is built with passion, precision and
                    purpose."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Who we are
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              React development powered by passionate developers.
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              We believe great websites are more than just good-looking
              interfaces. They should be fast, accessible, responsive and
              genuinely enjoyable to use.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              Our approach combines clean code, thoughtful design and modern
              development practices to create digital products that are built
              to last.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  ⚡
                </div>

                <h4 className="font-semibold text-white">
                  Fast & Responsive
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Optimized experiences across every screen size.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  ✦
                </div>

                <h4 className="font-semibold text-white">
                  Modern Technology
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Built with React and today's best development tools.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 border-y border-white/10 py-6">
              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="mt-1 text-sm text-slate-500">Projects</p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="mt-1 text-sm text-slate-500">Years</p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="mt-1 text-sm text-slate-500">Passion</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
                Explore Our Work
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}