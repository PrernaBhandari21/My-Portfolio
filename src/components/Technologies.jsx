import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import reactImage from "../assets/react.png";
import angular from "../assets/angular.png";
import firebase from "../assets/firebase.png";
import node from "../assets/node.png";
// import express from "../assets/express.png";

const Technologies = () => {


    const techs = [
        {
            id : 1,
            src : html,
            title: 'HTML',
            style : "shadow-orange-500"
        },
        {
            id : 2,
            src : css,
            title: 'CSS',
            style : "shadow-blue-500"
        },
        {
            id : 3,
            src : javaScript,
            title: 'JavaScript',
            style : "shadow-yellow-500"
        },
        {
            id : 4,
            src : tailwind,
            title: 'Tailwind',
            style : "shadow-sky-400"
        },
        {
            id : 5,
            src : github,
            title: 'Github',
            style : "shadow-gray-400"
        },
        {
            id : 6,
            src : reactImage,
            title: 'React',
            style : "shadow-blue-600"
        },
        {
            id : 7,
            src : angular,
            title: 'Angular',
            style : "shadow-red-500"
        },
        {
            id : 8,
            src : firebase,
            title: 'Firebase',
            style : "shadow-yellow-500"
        },
        {
            id : 9,
            src : node,
            title: 'Node',
            style : "shadow-green-500"
        },
        
    ]
    return (
        <div name="technology stack" className="bg-gradient-to-b from-gray-800 to-black min-h-screen">
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
            <div className="mt-10">
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Tech Stack
              </p>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-6 sm:px-12">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Technologies