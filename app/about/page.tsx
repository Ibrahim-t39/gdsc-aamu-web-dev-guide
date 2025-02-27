"use client";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("goals");

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 md:px-10 lg:px-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          About GDSC AAMU WEB DEV TEAM
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-2"></div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Intro card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition hover:shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We are the <b>Google Developer Group</b> (GDG) at Alabama A&M University, a community of tech enthusiasts passionate about learning, building, and sharing knowledge. Our goal is to create projects that enhance student experiences while helping members grow their technical skills.
            <br /><br />
            This semester, we’re developing <b>Rate My Professor</b>, a platform that allows students to share honest feedback about their professors, helping others make informed course decisions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 border-b border-gray-300 dark:border-gray-700 pb-2">
          {["goals", "project"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-sm sm:text-base font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              {tab === "goals" ? "Our Goals" : "Current Project"}
            </button>
          ))}
        </div>

        {/* Goals Section */}
        <div className={`${activeTab === "goals" ? "block" : "hidden"} space-y-6`}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Our Goals</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {[
                "Foster a collaborative learning environment",
                "Develop practical skills through hands-on projects",
                "Connect students with industry professionals",
                "Encourage innovation and problem-solving",
              ].map((goal, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-2">
                    ✔
                  </div>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Section */}
        <div className={`${activeTab === "project" ? "block" : "hidden"} space-y-6`}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">Current Project</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our current project is a <b>professor review platform</b> designed to help students make informed course choices. This project gives our team hands-on experience in <b>full-stack development</b>, covering everything from building intuitive user interfaces to managing backend services and databases.
            </p>

            {/* Project stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                { label: "Team Size", value: "13", color: "red" },
                { label: "Timeline", value: "10 weeks", color: "blue" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border border-gray-300 dark:border-gray-700 text-center`}
                >
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
