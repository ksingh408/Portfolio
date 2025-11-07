// import React from 'react';

import React from 'react';

export default function About() {
  return (
    <section className="px-6 md:px-16 mt-20">
      <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
        About Me
      </h2>

      {/* About Card */}
      <div className="flex flex-col md:flex-row gap-6 items-center bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        <p className="flex-1 text-lg text-slate-700 leading-relaxed">
          I’m a Software Engineering graduate from Bhopal, specializing in
          JavaScript, React, Node.js, HTML, CSS, and MongoDB. I have 4 months of
          internship experience working on real-world web applications. I’ve
          built full-stack projects including an Inventory Management API, a
          feature-rich E-commerce platform with secure authentication, cart, and
          wishlist functionality, and a real-time Chat Application with live
          messaging. My portfolio reflects my skills, passion for coding, and
          commitment to continuous learning.
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-slate-700 space-y-2">
        <p>
          <span className="font-semibold text-indigo-600">📞 Contact:</span>{' '}
          9973489954
        </p>
        <p>
          <span className="font-semibold text-indigo-600">📍 Location:</span>{' '}
          Bengaluru, India
        </p>
        <p>
          <span className="font-semibold text-indigo-600">✉️ Email:</span>{' '}
          <a
            href="https://mail.google.com/mail/?view=cm&to=kunalsinghxy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            kunalsinghxy@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold text-indigo-600">🔗 Github:</span>{' '}
          <a
            href="https://github.com/ksingh408"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            github.com/ksingh408
          </a>
        </p>
      </div>

      {/* Skills */}
      <div className="mt-14">
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-indigo-700">
          Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {['HTML & CSS',
            'JavaScript',
            'React',
            'Node.js',
            'Express.js',
            'Git & GitHub',
            'OOP Concepts',
            'MongoDB',
            'SQL',
            'Redux Toolkit',
            'Socket.io',
          ].map((skill, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-xl shadow-md hover:scale-105 transition transform duration-300 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

