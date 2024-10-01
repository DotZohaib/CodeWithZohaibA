import React from 'react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Web design',
    description: 'Web development is the process of building, programming...',
    link: '#',
  },
  {
    id: 2,
    title: 'Graphics design',
    description: 'Graphics design is the process of creating visual content...',
    link: '#',
  },
  {
    id: 3,
    title: 'Social media',
    description: 'Social media management is the process of handling...',
    link: '#',
  },
  {
    id: 4,
    title: 'Artificial intelligence',
    description: 'Artificial intelligence is the process of creating Future planning...',
    link: '#',
  },
  {
    id: 5,
    title: 'Digital marketing',
    description: 'Digital marketing involves promoting services online...',
    link: '#',
  },
  {
    id: 6,
    title: 'Content writing',
    description: 'Content writing is the art of creating engaging content...',
    link: '#',
  },
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="text-purple-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 hover:bg-pink-700 p-6 rounded-lg shadow-lg group hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-purple-500 mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link href={service.link} className="text-purple-500 group-hover:text-purple-400 font-semibold">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
