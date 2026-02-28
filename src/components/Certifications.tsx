function Certifications() {
  const certifications = [
    {
      title: "Programming in C",
      platform: "Infosys Springboard",
      date: "Jul 2025",
      description:
        "Comprehensive course covering C programming fundamentals, including data types, control structures, functions, arrays, and pointers, preparing for algorithmic problem-solving and foundational programming skills.",
    },
    {
      title: "Python Fundamentals",
      platform: "Infosys Springboard",
      date: "Jul 2025",
      description:
        "Focused on core Python concepts such as variables, loops, data structures, object-oriented programming, and file handling. Applied skills through mini projects to strengthen AI and data science foundations.",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      platform: "Coursera",
      date: "Jan 2023",
      description:
        "Structured program covering data cleaning, visualization, analysis, and reporting. Gained hands-on experience with spreadsheets, SQL, R programming, and Tableau to derive actionable insights from real-world datasets.",
    },
    {
      title: "RPA Citizen Developer Foundation",
      platform: "UiPath",
      date: "Jan 2023",
      description:
        "Training on Robotic Process Automation (RPA) principles and UiPath platform tools, enabling automation of repetitive tasks, workflow design, and improving process efficiency for business operations.",
    },
  ];

  return (
    <section
      id="certifications"
      className="px-8 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">
        Certifications & Training
      </h2>

      <ul className="max-w-4xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className="flex flex-col gap-2 border-l-2 border-blue-500 pl-4 hover:bg-gray-700 transition-colors rounded-md py-3"
          >
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-blue-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-lg hover:text-blue-400 transition-colors">{cert.title}</h3>
                <p className="text-gray-300 text-sm">{cert.platform} — {cert.date}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm ml-6">{cert.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;