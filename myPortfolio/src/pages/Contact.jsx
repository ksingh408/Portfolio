import React from 'react';

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    if (!name || !email || !message) {
      alert('Please fill all the fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      alert('Something went wrong!');
    }
  };

  return (
    <section className="max-w-3xl mx-auto mt-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
        Contact
      </h2>
      <form
        className="space-y-6 bg-gradient-to-r from-indigo-50 to-violet-50 p-8 rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>
        <textarea
          placeholder="Your message"
          rows="5"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition transform duration-300 font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
