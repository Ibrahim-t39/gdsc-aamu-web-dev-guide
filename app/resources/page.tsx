"use client";

import React, { useState } from "react";

export default function Contact() {
  const [activeCategory, setActiveCategory] = useState("React");
  
  // Updated resources object with all categories as separate keys and all links preserved
  const resources = {
    "React": {
      "Official Docs": [
        { name: "React Official Documentation", link: "https://react.dev/" },
        { name: "MDN Web Docs – React Tutorial", link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" }
      ],
      "Free Online Courses": [
        { name: "Full Stack Open (University of Helsinki)", link: "https://fullstackopen.com/en/" },
        { name: "The Odin Project – React Course", link: "https://www.theodinproject.com/paths/full-stack-javascript/courses/react" },
        { name: "freeCodeCamp React Curriculum", link: "https://www.freecodecamp.org/learn/front-end-development-libraries/react/" }
      ]
    },
    "MongoDB": {
      "Official Docs": [
        { name: "MongoDB Docs", link: "https://www.mongodb.com/docs/manual/" }
      ],
      "Interactive Learning": [
        { name: "MongoDB University (Free Courses)", link: "https://learn.mongodb.com/" }
      ],
      "Video Tutorials": [
        { name: "freeCodeCamp YouTube", link: "https://www.youtube.com/c/Freecodecamp" },
        { name: "Traversy Media YouTube", link: "https://www.youtube.com/c/TraversyMedia" }
      ],
      "Tutorials": [
        { name: "W3Schools (MongoDB)", link: "https://www.w3schools.com/nodejs/nodejs_mongodb.asp" }
      ]
    },
    "Node.js": {
      "Official Docs": [
        { name: "Node.js Docs", link: "https://nodejs.org/en/docs" }
      ],
      "Interactive Learning": [
        { name: "NodeSchool (Node.js Workshops)", link: "https://nodeschool.io/" }
      ],
      "Video Tutorials": [
        { name: "freeCodeCamp YouTube", link: "https://www.youtube.com/c/Freecodecamp" },
        { name: "Traversy Media YouTube", link: "https://www.youtube.com/c/TraversyMedia" },
        { name: "The Net Ninja YouTube", link: "https://www.youtube.com/c/TheNetNinja" }
      ],
      "Tutorials": [
        { name: "W3Schools (Node.js)", link: "https://www.w3schools.com/nodejs/" }
      ]
    },
    "Express.js": {
      "Official Docs": [
        { name: "Express.js Docs", link: "https://expressjs.com/en/guide/routing.html" }
      ],
      "Tutorials": [
        { name: "MDN Express.js Tutorial", link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" }
      ],
      "Video Tutorials": [
        { name: "freeCodeCamp YouTube", link: "https://www.youtube.com/c/Freecodecamp" },
        { name: "Traversy Media YouTube", link: "https://www.youtube.com/c/TraversyMedia" }
      ]
    },
    "JavaScript, CSS & HTML": {
      "Official Docs": [
        { name: "MDN Web Docs (HTML, CSS, JS)", link: "https://developer.mozilla.org/en-US/" }
      ],
      "Interactive Learning": [
        { name: "freeCodeCamp (Web Dev)", link: "https://www.freecodecamp.org/learn/" },
        { name: "Codecademy (Free Web Dev Courses)", link: "https://www.codecademy.com/catalog/all" }
      ],
      "Video Tutorials": [
        { name: "freeCodeCamp YouTube", link: "https://www.youtube.com/c/Freecodecamp" },
        { name: "Traversy Media YouTube", link: "https://www.youtube.com/c/TraversyMedia" },
        { name: "The Net Ninja YouTube", link: "https://www.youtube.com/c/TheNetNinja" }
      ],
      "Free Courses": [
        { name: "The Odin Project (HTML/CSS/JS)", link: "https://www.theodinproject.com/paths/foundations/courses/foundations" },
        { name: "W3Schools HTML/CSS/JS", link: "https://www.w3schools.com/" },
        { name: "Egghead.io Free JavaScript Course", link: "https://egghead.io/courses/javascript-the-hard-parts" },
        { name: "Microsoft Learn JavaScript Course", link: "https://learn.microsoft.com/en-us/training/paths/javascript-first-steps/" },
        { name: "W3Cx Introduction to JavaScript (edX)", link: "https://www.edx.org/course/javascript-introduction" },
        { name: "Johns Hopkins: HTML, CSS, and JavaScript for Web Developers", link: "https://www.coursera.org/learn/html-css-javascript-for-web-developers" }
      ]
    },
    "Full-Stack Development": {
      "Structured Curricula": [
        { name: "The Odin Project", link: "https://www.theodinproject.com/" },
        { name: "Full Stack Open (University of Helsinki)", link: "https://fullstackopen.com/en/" }
      ],
      "Video Courses": [
        { name: "freeCodeCamp YouTube", link: "https://www.youtube.com/c/Freecodecamp" },
        { name: "Traversy Media YouTube", link: "https://www.youtube.com/c/TraversyMedia" },
        { name: "The Net Ninja YouTube", link: "https://www.youtube.com/c/TheNetNinja" }
      ],
      "Free University Courses": [
        { name: "Harvard CS50's Web Programming with Python and JavaScript", link: "https://cs50.harvard.edu/web/" },
        { name: "Johns Hopkins: HTML, CSS, and JavaScript for Web Developers", link: "https://www.coursera.org/learn/html-css-javascript-for-web-developers" }
      ],
      "Interactive Learning": [
        { name: "freeCodeCamp (Full Stack Dev)", link: "https://www.freecodecamp.org/learn/" },
        { name: "Codecademy (Free Web Dev Courses)", link: "https://www.codecademy.com/catalog/all" }
      ]
    }
  };

  // Get all available categories from the resources object
  const categories = Object.keys(resources);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Development Learning Resources</h1>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeCategory === category ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {resources[activeCategory] && Object.keys(resources[activeCategory]).map((section) => (
        <div key={section} className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{section}</h2>
          <ul className="space-y-6 text-gray-600">
            {resources[activeCategory][section].map((resource, index) => (
              <li key={index}>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline font-semibold"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}