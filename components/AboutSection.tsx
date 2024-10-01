// components/AboutSection.js

import Image from "next/image";

export default function AboutSection() {
  return (
    <div id="about" className="p-10 bg-gray-100 ">
      <h2 className="text-4xl font-bold text-center mb-10">
          About <span className="text-purple-500">Me</span>
        </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/image/IMG_1292.jpg"
            alt="Zohaib Ali"
            width={350}
            height={200}
            className="rounded-md  border-teal-500 shadow-lg"
          />
        </div>
        <div className="space-y-4 text-gray-700 lg:-ml-32 -ml-0">
          <h2 className="text-2xl font-bold text-teal-600">Web Developer</h2>
          <p className="text-lg">
            Greetings! I'm Zohaib, currently pursuing my IT studies while
            actively engaging in freelance work on platforms like Fiverr and
            Amazon. In addition to being a student, I have experience working in
            the tech industry, specifically as a MERN Stack Developer at XPACE
            Technologies Pvt. Ltd. and Code with Alpa, as well as a Web
            Developer at Ibex. I am deeply involved with Artificial Intelligence
            and have gained expertise in several advanced technologies,
            including Full Stack development, Machine Learning, Deep Learning,
            and Natural Language Processing. I am proficient in Python, Database
            Management, Cyber Security, Animation, and Data Science. My skills
            also extend to Network Programming, Scripting, Data Structures,
            Ethical Hacking, Graphics & Multimedia, Testing & Quality Assurance,
            Code Optimization, and System Analysis. Additionally, I have a
            strong command of C++, C, Algorithms, and API development. With a
            comprehensive understanding of both front-end and back-end
            technologies, I specialize in creating dynamic, secure, and
            efficient web applications that are visually appealing and optimized
            for performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li>
                <strong>Name:</strong> <span>Zohaib Ali</span>
              </li>
              <li>
                <strong>Websites:</strong> <span>www.CodeWithZohaib.com</span>
              </li>
              <li>
                <strong>Phone:</strong> <span>+92 3493237141</span>
              </li>
              <li>
                <strong>Email:</strong> <span>Zuhaibalid@gmail.com</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <strong>Age:</strong> <span>21</span>
              </li>
              <li>
                <strong>City:</strong> <span>Pakistan</span>
              </li>
              <li>
                <strong>Degree:</strong> <span>Information technology</span>
              </li>
              <li>
                <strong>Work:</strong> <span>Full Stack Dev</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project Facts Section */}
      <section id="fact" className="mt-16 bg-teal-50 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">
          Project Facts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fa-regular fa-face-smile text-5xl text-teal-500"></i>
            <strong className="block text-3xl mt-4">50+</strong>
            <p>Happy Clients</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fa-regular fa-file-code text-5xl text-teal-500"></i>
            <strong className="block text-3xl mt-4">60+</strong>
            <p>Projects Completed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fa-solid fa-headset text-5xl text-teal-500"></i>
            <strong className="block text-3xl mt-4">24/7</strong>
            <p>Hours of Support</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fa-solid fa-clock-rotate-left text-5xl text-teal-500"></i>
            <strong className="block text-3xl mt-4">10+</strong>
            <p>Sending Orders</p>
          </div>
        </div>
      </section>
    </div>
  );
}
