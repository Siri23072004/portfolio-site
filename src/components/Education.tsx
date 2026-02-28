interface EducationItem {
  institution: string;
  details: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Moodlakatte Institute of Technology, Kundapura",
    details: "B.E. CSE (Data Science), CGPA: 7.36/10 (2022-2026)",
  },
  {
    institution: "R N Shetty Composite PU College, Kundapura",
    details: "XII, Science, 69.33% (2022)",
  },
  {
    institution: "Saraswati Vidyalaya English Medium Highschool, Siddapura",
    details: "X, 78.08% (2020)",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-10 bg-gray-900 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Education
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

        {educationData.map((edu, index) => (
          <div key={index} className={`mb-12 flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            {/* Content Card */}
            <div className="w-full md:w-1/2 px-8 py-6 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-purple-400">{edu.institution}</h3>
              <p className="text-gray-300 mt-2">{edu.details}</p>
            </div>
            {/* Timeline Circle */}
            <div className="hidden md:block w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );

}
