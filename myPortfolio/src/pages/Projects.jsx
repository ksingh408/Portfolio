import React from 'react';

export default function Projects() {
  const projects = [
    {
      image: '/image/img1.png',
      title: 'E-commerce Store',
      description: 'A modern e-commerce platform with React, Redux, and Tailwind.',
      tech: 'React, Redux, Node.js,MongoDB',
     link:' https://ecommerce-app-two-jade-61.vercel.app/',

    },
    {
        image: '/image/img2.png',
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built using React and Tailwind.',
      tech: 'React, Tailwind CSS',
    },
    {
  image: '/image/img3.png',
      title: 'Mini-inventory Api',
      description: 'Real-time chat app using Node.js',
      tech: 'Node.js, React, Express',
            link:'https://mini-inventroy.vercel.app/',
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border shadow rounded-lg p-4">
            <div className="h-36 bg-gray-100 mb-4 rounded">
              {/* Placeholder for project image */}
              <img
                src={project.image}
              
                className="w-full h-full object-cover rounded"
              />  
            </div>
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <p className="text-xs text-blue-800 font-medium mb-4">{project.tech}</p>
            <div className="flex gap-4 text-sm">
              {/* <a href="#" className="text-blue-700 hover:underline">View Code</a> */}
              <a href={project.link}   target="_blank"
  rel="noopener noreferrer" className=" block text-blue-700 hover:underline">Go to Website</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}