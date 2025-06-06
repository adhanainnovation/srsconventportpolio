import React from "react";
import { Lightbulb, Group, ThumbUp } from "@mui/icons-material";

const Moto = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 mt-[8%]">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900">
            Our Mission & Motto
          </h1>
          <p className="text-lg sm:text-2xl font-semibold text-blue-700">
            Challenge Yourself, Inspire Excellence
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
          {mottoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  {React.cloneElement(item.icon, {
                    className: "text-blue-500 text-3xl",
                  })}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800 text-center">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-800 text-center">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          The school's goal is to empower students to navigate their world effectively, becoming competent and capable of achieving mastery.
          </p>
        </div>
      </div>
    </div>
  );
};

const mottoItems = [
  {
    title: "Innovation",
    description:
      "We strive to cultivate a spirit of innovation among our students, encouraging them to think outside the box, explore new ideas, and pioneer groundbreaking solutions to real-world challenges.",
    icon: <Lightbulb />,
  },
  {
    title: "Teamwork",
    description:
      "We recognize the importance of teamwork in achieving collective success. Through collaborative projects and extracurricular activities, we foster a collaborative mindset among our students.",
    icon: <Group />,
  },
  {
    title: "Quality",
    description:
      "Quality is at the core of everything we do. From our rigorous academic standards to our state-of-the-art facilities and experienced faculty, we are committed to delivering excellence in education.",
    icon: <ThumbUp />,
  },
];

export default Moto;