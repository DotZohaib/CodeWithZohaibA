// components/LatestWork.tsx
import Image from 'next/image';

const LatestWork = () => {
  const projects = [
    {
      imageSrc: "/image/port7.jpg",
      category: "Hero Section",
    },
    {
      imageSrc: "/image/port16.png",
      category: "Hero Section",
    },
    {
      imageSrc: "/image/port23.jpeg",
      category: "Dashboard Design",
    },
    {
      imageSrc: "/image/port24.jpg",
      category: "Hero Section",
    },
    {
      imageSrc: "/image/port25.png",
      category: "WordPress Theme",
    },
    {
      imageSrc: "/image/port26.jpg",
      category: "WordPress Theme",
    },
  ];

  return (
    <div className="  py-16">
      <h2 className="text-center text-4xl font-bold mb-12">
        My Latest  <span className="text-pink-500">Work  💼</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="relative group">
            <Image
              src={project.imageSrc}
              alt={"IMage"}
              className="rounded-lg shadow-lg h-[200px] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4">
              <p className="text-sm text-pink-500">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
