export default function Skills() {
  const skills = [
    { name: "Python", desc: "Versatile programming language for scripting, data handling, automation, and building intelligent solutions." },
    { name: "Tailwind CSS", desc: "Modern UI Styling" },
    { name: "HTML", desc: " Standard markup language for creating and structuring web pages and applications." },
    { name: "Tableau", desc: " Powerful data visualization tool for transforming raw data into interactive dashboards and actionable insights." },
  ];

  return (
    <section id="skills" className="py-12 bg-gray-900 text-white">
      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative p-6 bg-gray-800/40 border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 shadow-lg"
          >
            {/* Subtle Glow Effect on Hover */}
            <div className="absolute inset-0 bg-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {skill.name}
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}