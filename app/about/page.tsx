"use client";
import { Bold } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("goals");
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header with animated underline */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white relative inline-block">
          About GDSC AAMU WEB DEV TEAM
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h1>
        <div className="h-2 w-24 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
      </div>
      
      {/* Main content with improved card design */}
      <div className="space-y-8">
        {/* Introduction with subtle animation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We are the <b>Google Developer Group</b> (GDG) at Alabama A&M University, a community of tech enthusiasts passionate 
            about learning, building, and sharing knowledge. Our goal is to create projects that enhance student experiences 
            while helping members grow their technical skills.
            <br></br>
            <br></br>
            This semester, we’re developing <b>Rate My Professor</b>, a platform that allows students to share honest feedback about 
            their professors, helping others make informed course decisions. Through this project, we aim to gain hands-on 
            experience in web development while possibly contributing something valuable to our campus community.
          </p>
        </div>
        
        {/* Tabs navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab("goals")}
            className={`py-2 px-4 text-sm font-medium transition-colors duration-200 ${
              activeTab === "goals"
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Our Goals
          </button>
          <button
            onClick={() => setActiveTab("project")}
            className={`py-2 px-4 text-sm font-medium transition-colors duration-200 ${
              activeTab === "project"
                ? "text-green-600 dark:text-green-400 border-b-2 border-green-500"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Current Project
          </button>
        </div>
        
        {/* Goals panel */}
        <div className={`${activeTab === "goals" ? "block" : "hidden"} space-y-6`}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Our Goals</h2>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {[
                "Foster a collaborative learning environment",
                "Develop practical skills through hands-on projects",
                "Connect students with industry professionals", 
                "Encourage innovation and problem-solving"
              ].map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Project panel */}
        <div className={`${activeTab === "project" ? "block" : "hidden"} space-y-6`}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">Current Project</h2>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/20">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our current project is <b>professor review platform</b> designed to help students make informed course choices. 
              This project gives our team hands-on experience in <b>full-stack development</b>, covering everything from building 
              intuitive user interfaces to managing backend services and databases. Through this, we’re not just developing an 
              app but we’re sharpening our technical skills while creating a useful tool for Alabama A & M University.
              </p>
            </div>
            
            {/* Project stats cards */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { label: "Team Size", value: "13", color: "red" },
                { label: "Timeline", value: "10 weeks", color: "blue" },
              ].map((stat, index) => (
                <div key={index} className={`bg-${stat.color}-50 dark:bg-${stat.color}-900/10 p-3 rounded-lg border border-${stat.color}-100 dark:border-${stat.color}-900/20 text-center`}>
                  <p className={`text-${stat.color}-600 dark:text-${stat.color}-400 text-sm font-medium`}>{stat.label}</p>
                  <p className="text-gray-800 dark:text-gray-200 text-xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}