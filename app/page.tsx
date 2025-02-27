"use client";
import Link from "next/link";

export default function Home() {
  const cards = [
    {
      title: "Project Timeline",
      description: "View the detailed timeline for project development",
      href: "/timeline",
      bgColor: "bg-blue-600 hover:bg-blue-700",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      title: "Meet the Team",
      description: "Learn about team members and their roles",
      href: "/team",
      bgColor: "bg-red-600 hover:bg-red-700",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Resources",
      description: "Access tutorials, documentation, and learning materials",
      href: "/resources",
      bgColor: "bg-yellow-500 hover:bg-yellow-600",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      title: "Contact Us",
      description: "Get in touch with the GDSC AAMU team",
      href: "/contact",
      bgColor: "bg-green-600 hover:bg-green-700",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
            <span className="block">Welcome to the</span>
            <span className="block text-blue-600">Rate My Professor Project Guide</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
          Navigate your project journey with our comprehensive guide for <b>GDG AAMU</b> team members.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Link href={card.href} key={index} className="group">
              <div className={`h-full rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl ${card.bgColor}`}>
                <div className="p-6 flex flex-col h-full justify-between">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-20 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">{card.title}</h2>
                    <p className="text-white text-opacity-90">{card.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}