import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base md:text-xl mt-10 md:mt-20">
        I have a strong passion for web development, which I began exploring during the 6th semester of my college. My first internship at Thales allowed me to work on Angular and develop a Single Page Application (SPA) that utilized JSON data to populate forms. Subsequently, I embarked on a 6-month internship at Build With Innovation, where I gained valuable experience by working on live projects, replicating Figma designs, and utilizing Firebase as the backend along with Angular and React for the frontend.
        </p>

        <br />

        <p className="text-base md:text-xl">
        Continuing my journey, I joined Techbets Infotech as a web developer, where I honed my skills in technologies such as PostgreSQL, Node.js, Express.js for the backend, and Angular for the frontend. I am always enthusiastic about expanding my skillset, seeking new challenges that push me to grow both personally and professionally in the field of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
