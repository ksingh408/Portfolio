import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Contact</h2>
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" placeholder="Name" className="p-3 border rounded w-full" required />
          <input type="email" placeholder="Email" className="p-3 border rounded w-full" required />
        </div>
        <textarea placeholder="Your message" rows="5" className="w-full p-3 border rounded" required></textarea>
        <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900">
          Send Message
        </button>
      </form>
    </section>
  );
}