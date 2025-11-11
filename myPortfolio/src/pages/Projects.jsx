// // import React from 'react';
// // import React from 'react';

import React from 'react';

export default function Projects() {
  const projects = [
    {
      image: '/image/img1.png',
      title: 'E-Commerce Platform',
      description:
        'A full-stack online store with user authentication, cart, wishlist, and admin features built using React, Node.js, and MongoDB.',
      link: 'https://ecommerce-app-two-jade-61.vercel.app/',
    },
    // {
    //   image: '/image/img3.png',
    //   title: 'Inventory Management API',
    //   description:
    //     'A REST API for managing inventory with JWT authentication, CRUD operations, and MongoDB integration.',
    //   link: 'https://mini-inventroy.vercel.app/',
    // },
    {
      image: '/image/img2.png',
      title: 'Chat Web Application',
      description:
        'A real-time Chat Application using React, Node.js, Socket.io and MongoDB, featuring user authentication.',
      link: 'https://chat-app-m1yw.vercel.app/',
    },
  ];

  return (
    <section className="px-6 md:px-16 mt-24">
      <h2 className="text-3xl lg:text-4xl font-extrabold mb-10 text-indigo-700">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition transform duration-300 border border-gray-200 hover:border-indigo-400"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project Info */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-indigo-700">
                {project.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl shadow-lg hover:scale-110 transform transition text-sm font-semibold"
              >
                🚀 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
