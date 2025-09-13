// import React from 'react'
// import Contact from './Contact';
// import Projects from './Projects';
// import About from './About';


import React from 'react';
import About from './About';
import Projects from './Projects';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-16 mt-20 px-6 md:px-16 bg-gradient-to-r from-indigo-50 to-white rounded-2xl">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <p className="text-lg md:text-xl text-gray-600">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-700 to-violet-500 bg-clip-text text-transparent drop-shadow-lg">
            Kunal Kumar Singh
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 mt-3 tracking-wide">
            I&apos;m a <span className="text-indigo-600">Software Developer</span>
          </h2>
          <a
            className="inline-block mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-base font-semibold shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300 backdrop-blur-md"
            href="resumekunal2.pdf"
            download="resumekunal2.pdf"
          >
            📄 Download CV
          </a>
        </div>

        {/* Profile Image */}
        <img
          src="https://images.pexels.com/photos/7818233/pexels-photo-7818233.jpeg"
          alt="Profile"
          className="w-44 h-44 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-indigo-200 hover:scale-105 hover:shadow-2xl transition duration-300"
        />
      </section>

      <About />
      <Projects />
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//       <section className="flex flex-col-reverse md:flex-row items-center gap-16 mt-14 px-6 md:px-16">
//         {/* Text Section */}
//         <div className="text-center md:text-left space-y-4">
//           <p className="text-lg md:text-xl lg:text-4xl text-gray-700">Hi, my name is</p>
//           <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 to-violet-500 bg-clip-text text-transparent drop-shadow-md">
//             Kunal Kumar Singh
//           </h1>
//           <h2 className="text-2xl font-medium text-gray-700 mt-5 tracking-wide">
//             I&apos;M A SOFTWARE DEVELOPER
//           </h2>
//           <a
//             className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-sm font-semibold rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
//             href="resumekunal2.pdf"
//             download="resumekunal2.pdf"
//           >
//             Download CV
//           </a>
//         </div>

//         {/* Profile Image */}
//         <img
//           src="https://images.pexels.com/photos/7818233/pexels-photo-7818233.jpeg"
//           alt="Profile"
//           className="   w-40 h-40 lg:w-62 lg:h-62 rounded-full lg:ml-36 object-cover shadow-2xl border-4 border-indigo-200 hover:scale-105 transition duration-300"
//         />
//       </section>

//       <About />
//       <Projects />
//       {/* <Contact /> */}
//     </>
//   );
// }
