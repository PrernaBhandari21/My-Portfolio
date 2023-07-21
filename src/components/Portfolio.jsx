import React from 'react'
import amazonClone from "../assets/portfolio/Amazon-clone.png";
import netflixClone from "../assets/portfolio/Netflix-clone.png";
import adminDashboard from "../assets/portfolio/Admin-Dashboard.png";


const Portfolio = () => {

    const portfolios =[
        {
            id:1,
            src:netflixClone,
            demoSrc:"https://netflix-clone-bb46e.web.app/",
            codeSrc:"https://github.com/PrernaBhandari21/Netflix-Clone"
        },
        {
            id:2,
            src:amazonClone,
            demoSrc:"https://clone-c9f72.web.app/",
            codeSrc:"https://github.com/PrernaBhandari21/Amazon-clone"
        },
       {
        id: 3,
        src : adminDashboard, 
        demoSrc : "https://main--teal-alpaca-114fa7.netlify.app/",
        codeSrc : "https://github.com/PrernaBhandari21/react-dashboard"
       }
        
       
      
    ]

    const handleDemoClick = (demoSrc) => {
        window.open(demoSrc, "_blank");
      };
    
      const handleCodeClick = (codeSrc) => {
        window.open(codeSrc, "_blank");
      };

    return (
        <div
          name="portfolio"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src , demoSrc,codeSrc}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleDemoClick(demoSrc)}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleCodeClick(codeSrc)}>
                  Code
                </button>
              </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Portfolio