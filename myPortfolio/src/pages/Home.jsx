
import React from 'react';
import About from './About';
import Projects from './Projects';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-16 lg:gap-16 mt-20 px-6 md:px-16 bg-gradient-to-r from-indigo-50 to-white rounded-2xl">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-2">
          <p className=" mt-2 text-lg md:text-xl  text-gray-600">Hi, my name is</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-700 to-violet-500 bg-clip-text text-transparent drop-shadow-lg">
            Kunal Kumar Singh
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 mt-3 tracking-wide">
            I&apos;m a <span className="text-indigo-600">Software Developer</span>
          </h2>
          <a
            className="inline-block mt-3 mb-6 px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-base font-semibold shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300 backdrop-blur-md"
            href="kunalResume.pdf"
            download="kunalResume.pdf"
          >
            📄 Download CV
          </a>
        </div>

        {/* Profile Image */}
        <img
          src="https://images.pexels.com/photos/7818233/pexels-photo-7818233.jpeg"
          alt="Profile"
          className="mt-4 md:mr-12 lg:mr-12 w-50 h-50 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-indigo-200 hover:scale-105 hover:shadow-2xl transition duration-300"
        />
      </section>

      <About />
      <Projects />
    </>
  );
}
