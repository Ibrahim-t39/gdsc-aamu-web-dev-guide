const tools = [
  { name: "React", description: "A JavaScript library for building user interfaces", color: "border-google-blue" },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    color: "border-google-green",
  },
  {
    name: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    color: "border-google-yellow",
  },
  {
    name: "MongoDB",
    description: "Source-available cross-platform document-oriented database program",
    color: "border-google-green",
  },
  { name: "Firebase/Clerk", description: "Authentication and user management platforms", color: "border-google-red" },
  {
    name: "Git & GitHub",
    description: "Version control system and collaboration platform",
    color: "border-google-blue",
  },
  { name: "Figma/Adobe XD", description: "Design and prototyping tools", color: "border-google-yellow" },
]

export default function Tools() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Tools & Technologies</h1>
      <p className="mb-8 text-center text-gray-600">
        Our project utilizes a variety of modern tools and technologies. Familiarize yourself with these to contribute
        effectively to the project.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className={`${tool.color} border-l-4 pl-4 py-2`}>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{tool.name}</h2>
            <p className="text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

