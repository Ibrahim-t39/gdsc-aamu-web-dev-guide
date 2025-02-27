"use client";

import React, { useState } from "react";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("General");

  const tabs = ["General", "Frontend", "Backend"];

  const timelineData = {
    General: [
      {
        weeks: "1-2",
        title: "Project Setup & Design",
        tasks: [
          {
            name: "Initialize GitHub repository",
            leads: "John & Dai'jah"
          },
          {
            name: "Set up file structure for Frontend and Backend",
            leads: "John & Zizwe"
          },
          {
            name: "Install dependencies and frameworks",
            leads: "Dai'jah & Mercy"
          },
          {
            name: "Team familiarization with technologies",
            leads: "All Leads"
          },
          {
            name: "Define roles and responsibilities",
            leads: "Thabo (Overseer)"
          },
          {
            name: "Wireframe & mockups",
            leads: "Mercy & Zizwe"
          },
          {
            name: "Decide on branding",
            leads: "Mercy & Dai'jah"
          },
          {
            name: "Finalize core pages",
            leads: "Mercy & John"
          }
        ],
        color: "bg-blue-500",
        border: "border-blue-600",
        light: "bg-blue-100",
        text: "text-blue-800",
      },
    ],
    Frontend: [
      {
        weeks: "3-4",
        title: "Authentication & Basic Structure",
        tasks: [
          {
            name: "Implement login/signup forms with React",
            leads: "Dai'jah"
          },
          {
            name: "Configure routing and protected routes",
            leads: "John"
          },
          {
            name: "Create basic layout components",
            leads: "Mercy"
          },
          {
            name: "Set up global state management",
            leads: "Zizwe"
          },
          {
            name: "Begin applying design guidelines",
            leads: "Mercy & Dai'jah"
          },
          {
            name: "Ensure responsive design",
            leads: "John & Zizwe"
          }
        ],
        color: "bg-red-500",
        border: "border-red-600",
        light: "bg-red-100",
        text: "text-red-800",
      },
      {
        weeks: "5-6",
        title: "Review & Rating UI",
        tasks: [
          {
            name: "Create forms for students to submit professor reviews",
            leads: "Mercy"
          },
          {
            name: "Implement rating controls",
            leads: "Zizwe"
          },
          {
            name: "Validate input before submission",
            leads: "Dai'jah"
          },
          {
            name: "Show list of reviews on professor profile",
            leads: "John"
          },
          {
            name: "Organize review data in a user-friendly layout",
            leads: "Mercy"
          },
          {
            name: "Manage form states and handle errors",
            leads: "Zizwe"
          },
          {
            name: "Display success/error messages",
            leads: "Dai'jah"
          }
        ],
        color: "bg-yellow-500",
        border: "border-yellow-600",
        light: "bg-yellow-100",
        text: "text-yellow-800",
      },
      {
        weeks: "7-8",
        title: "Search & Filter Functionality",
        tasks: [
          {
            name: "Build search bar to find professors",
            leads: "Dai'jah"
          },
          {
            name: "Show dynamic results as user types",
            leads: "John"
          },
          {
            name: "Allow users to filter by rating",
            leads: "Zizwe"
          },
          {
            name: "Provide sorting options",
            leads: "Mercy"
          },
          {
            name: "Enhance component styling",
            leads: "Mercy"
          },
          {
            name: "Add basic accessibility features",
            leads: "Dai'jah"
          }
        ],
        color: "bg-green-500",
        border: "border-green-600",
        light: "bg-green-100",
        text: "text-green-800",
      },
      {
        weeks: "9-10",
        title: "Final Enhancements & Deployment",
        tasks: [
          {
            name: "Code splitting and lazy loading",
            leads: "John"
          },
          {
            name: "Optimize images and assets",
            leads: "Mercy"
          },
          {
            name: "Conduct UI/UX testing",
            leads: "Zizwe"
          },
          {
            name: "Ensure mobile responsiveness",
            leads: "Mercy"
          },
          {
            name: "Deploy to Vercel or Netlify",
            leads: "Thabo & Zizwe"
          },
          {
            name: "Configure environment variables",
            leads: "Dai'jah"
          },
          {
            name: "Final check on domain and SSL certificate",
            leads: "Dai'jah"
          }
        ],
        color: "bg-purple-500",
        border: "border-purple-600",
        light: "bg-purple-100",
        text: "text-purple-800",
      },
    ],
    Backend: [
      {
        weeks: "3-4",
        title: "Authentication & Database Setup",
        tasks: [
          {
            name: "Create routes for registration, login, logout",
            leads: "Dai'jah"
          },
          {
            name: "Integrate Firebase/Clerk tokens with Express middleware",
            leads: "John"
          },
          {
            name: "Set up MongoDB (local or Atlas)",
            leads: "Zizwe"
          },
          {
            name: "Define schema for Users, Professors, Reviews",
            leads: "Zizwe"
          },
          {
            name: "Configure indexing and relationships",
            leads: "Mercy"
          }
        ],
        color: "bg-indigo-500",
        border: "border-indigo-600",
        light: "bg-indigo-100",
        text: "text-indigo-800",
      },
      {
        weeks: "5-6",
        title: "Review Management",
        tasks: [
          {
            name: "Create RESTful APIs to add, update, and delete reviews",
            leads: "John"
          },
          {
            name: "Validate user permissions",
            leads: "Dai'jah"
          },
          {
            name: "Implement logic to calculate average ratings",
            leads: "Zizwe"
          },
          {
            name: "Store rating stats",
            leads: "Mercy"
          },
          {
            name: "Input validation",
            leads: "Mercy"
          },
          {
            name: "Rate limiting or basic throttling",
            leads: "Dai'jah"
          }
        ],
        color: "bg-teal-500",
        border: "border-teal-600",
        light: "bg-teal-100",
        text: "text-teal-800",
      },
      {
        weeks: "7-8",
        title: "Search & Filter APIs",
        tasks: [
          {
            name: "GET /professors?name=Smith or GET /professors?department=CS",
            leads: "John"
          },
          {
            name: "Handle combined filters",
            leads: "Dai'jah"
          },
          {
            name: "Allow sorting by average rating, number of reviews, or name",
            leads: "Zizwe"
          },
          {
            name: "Optimize queries",
            leads: "Zizwe"
          },
          {
            name: "Return paginated results",
            leads: "Mercy"
          },
          {
            name: "Provide total counts, next/previous page links",
            leads: "John"
          }
        ],
        color: "bg-orange-500",
        border: "border-orange-600",
        light: "bg-orange-100",
        text: "text-orange-800",
      },
      {
        weeks: "9-10",
        title: "Performance, Testing & Deployment",
        tasks: [
          {
            name: "Query optimization, indexing checks, caching",
            leads: "John"
          },
          {
            name: "Optimize server configuration for Express",
            leads: "Dai'jah"
          },
          {
            name: "Use frameworks like Jest/Mocha for testing",
            leads: "Zizwe"
          },
          {
            name: "Confirm API endpoints function correctly",
            leads: "John"
          },
          {
            name: "Deploy to Heroku, Render, or AWS",
            leads: "John & Dai'jah"
          },
          {
            name: "Secure environment variables",
            leads: "John"
          },
          {
            name: "Set up continuous integration (CI/CD)",
            leads: "All"
          }
        ],
        color: "bg-pink-500",
        border: "border-pink-600",
        light: "bg-pink-100",
        text: "text-pink-800",
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-2 sm:px-4 py-6 sm:py-12 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-xl p-4 sm:p-8 mb-6 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">Professor Rating Website</h1>
        <p className="text-center text-gray-600 text-base sm:text-lg mb-4 sm:mb-8">Project Timeline & E-Board Responsibilities</p>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition duration-200 ${
                activeTab === tab 
                ? "bg-gray-900 text-white shadow-md transform scale-105" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab} Timeline
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative">
        {timelineData[activeTab].map((item, index) => (
          <div key={index} className="relative mb-8 sm:mb-16">
            {/* Connecting line */}
            {index < timelineData[activeTab].length - 1 && (
              <div className="absolute top-12 bottom-0 left-4 sm:left-6 w-1 bg-gray-300 -z-10"></div>
            )}
            
            <div className="flex items-start">
              {/* Circle marker */}
              <div className={`relative ${item.color} h-8 w-8 sm:h-12 sm:w-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 flex-shrink-0`}>
                <span className="text-white font-bold text-xs sm:text-base">{index + 1}</span>
              </div>
              
              {/* Content card */}
              <div className={`ml-4 sm:ml-8 flex-1 rounded-xl shadow-md overflow-hidden`}>
                {/* Header */}
                <div className={`${item.color} text-white p-3 sm:p-5`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{item.title}</h2>
                    <div className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold inline-block mt-2 sm:mt-0 shadow-sm">
                      Weeks {item.weeks}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`p-3 sm:p-6 ${item.light}`}>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                    {item.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition duration-200">
                        <div className="flex items-start">
                          <div className={`${item.color} rounded-full p-1 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1`}>
                            <svg className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`${item.text} font-medium text-sm sm:text-base mb-1 break-words`}>{task.name}</div>
                            <div className="flex items-center">
                              <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span className="text-gray-700 text-xs sm:text-sm font-medium truncate">{task.leads}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}