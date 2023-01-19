import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a student at the Indian Institute of Technology Madras (IITM), one of the top engineering institutes in India. I am highly motivated and dedicated to achieving success in my studies and future career. I am proficient in a variety of subjects, including math, statistics , and computer science, and I am always looking for new opportunities to challenge myself and learn more. In my free time, I enjoy participating in extracurricular activities, such as coding clubs and robotics competitions, and I am also actively involved in my community through volunteering and service projects. I am confident that my strong work ethic and passion for problem-solving will serve me well in my future endeavors
        </p>

        <br />

        <p className="text-xl">
        Innovative Programmer and Internet Entrepreneur striving to make the world a more unified and connected place.Ready to utilize my skills and passion to further the mission of a company. Technologically adept, offering experience with many different social media platforms, office technology programs, and advanced computer skills.
        </p>
      </div>
    </div>
  );
};

export default About;
