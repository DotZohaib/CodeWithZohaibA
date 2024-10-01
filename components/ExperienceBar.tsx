import React from 'react';

const experienceData = [
  { skill: "Full Stack", level: "90%" },
  { skill: "MERN Stack", level: "85%" },
  { skill: "Artificial Intelligence", level: "80%" },
  { skill: "Machine Learning", level: "75%" },
  { skill: "Deep Learning", level: "70%" },
  { skill: "Natural Language Processing", level: "65%" },
  { skill: "Python", level: "95%" },
  { skill: "Database Management", level: "85%" },
  { skill: "Cyber Security", level: "70%" },
  { skill: "Animation", level: "60%" },
  { skill: "Data Science", level: "85%" },
  { skill: "Network Programming", level: "70%" },
  { skill: "Scripting", level: "75%" },
  { skill: "Data Structures", level: "80%" },
  { skill: "Hacker", level: "65%" },
  { skill: "Graphics & Multimedia", level: "60%" },
  { skill: "Testing & Quality", level: "70%" },
  { skill: "Code Optimization", level: "85%" },
  { skill: "Analysis", level: "80%" },
  { skill: "C++", level: "90%" },
  { skill: "C", level: "85%" },
  { skill: "Algorithm", level: "80%" },
  { skill: "API", level: "75%" }
];

const ExperienceBar = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 mt-10">
          My <span className="text-purple-500">Experience</span>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experienceData.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">{item.skill}</h2>
            <div className="relative w-full h-4 bg-gray-300 rounded-md">
              <div
                className="absolute h-4 bg-blue-500 rounded-md transition-all duration-500"
                style={{ width: item.level }}
              ></div>
            </div>
            <div className="text-right text-sm font-medium mt-2">{item.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceBar;
