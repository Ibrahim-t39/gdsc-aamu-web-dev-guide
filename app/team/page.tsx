import React from "react";

const teamMembers = [
  { name: "Thabo Ibrahim Traore", email: "thabo.traore@bulldogs.aamu.edu" },
  { name: "John Adeyemo", email: "john.adeyemo@bulldogs.aamu.edu" },
  { name: "Dai’jah Tarver", email: "daijah.tarver@bulldogs.aamu.edu" },
  { name: "Zizwe Mtonga", email: "zizwe.mtonga@bulldogs.aamu.edu" },
  { name: "Mercy Akinyemi", email: "mercy.akinyemi@bulldogs.aamu.edu" },
];

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Meet the Team</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        This is the team you can reach out to for any questions or collaboration.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <h2 className="text-xl font-bold text-blue-800">{member.name}</h2>
            <p className="text-gray-600 mb-4 text-yellow-800">{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
