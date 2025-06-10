import React from 'react'
import Contact from './Contact';
import Projects from './Projects';
import About from './About';

export default function Home() {
  return (
    <>
    <section className="flex flex-col-reverse md:flex-row items-center gap-18 mt-14">
      <div className="text-center md:text-left">
        <p className="text-lg text-gray-600">Hi, my name is</p>
        <h1 className="text-5xl font-extrabold text-blue-700">Kunal Kumar Singh</h1>
        <h2 className="text-2xl font-medium text-gray-600 mt-2">I'M A SOFTWARE DEVELOPER</h2>
        <a className=" block mt-6 px-6 py-2 bg-blue-800 text-white text-sm font-medium rounded hover:bg-blue-900 w-1/3"  href='kunalResume.pdf' download='resume.pdf'>Download CV</a>
      </div>
      <img
        src="data:image/jpeg;base64,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"
        alt="John Doe"
        className="w-52 h-52 rounded-full object-cover shadow-lg"
      />

      
    </section>
        <section className="flex flex-col-reverse md:flex-row items-center bg-amber-200 gap-12 mt-18">
          <About />
         
        </section>

          <section className="flex flex-col-reverse md:flex-row items-center bg-amber-200 gap-8 mt-12">
            <Projects />
          </section>
            <section className="flex flex-col-reverse md:flex-row items-center gap-8 mt-12">
            <Contact />
            </section>
        

        </>
  );
}