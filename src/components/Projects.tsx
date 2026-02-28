function Projects() {
  const projectList = [
    {
      title: "AI-Powered Digital Dermatology",
      description:
        "A comprehensive AI platform for detecting and classifying skin conditions such as acne, eczema, and melanoma with high accuracy. It leverages advanced machine learning models and image processing techniques to provide real-time diagnostics. The system includes interactive dashboards for doctors to track patient progress, visualize predictions, and manage records. Fully integrated into a web interface, it ensures accessibility for clinics while maintaining data security and performance optimization. This project demonstrates the practical impact of AI in healthcare by improving diagnostic efficiency and patient care.",
      tech: "Python • Artificial Intelligence • Web Integration",
    },
    {
      title: "Handwritten Kannada Text Recognition",
      description:
        "An OCR application designed to recognize and digitize handwritten Kannada text from paper or scanned documents. The system incorporates preprocessing steps to handle different handwriting styles, noise reduction, and character segmentation for higher accuracy. Built with Python and Streamlit, it converts handwritten notes into editable digital text, enabling easier storage, searching, and editing. This project serves educational and archival purposes, making handwritten content accessible and usable in digital workflows while showcasing the practical applications of AI for language and script processing.",
      tech: "Python • Streamlit • OCR",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-24 bg-gray-950 text-white"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-purple-400">
          Projects
        </h2>

        <div className="space-y-10">

          {projectList.map((project) => (
            <div
              key={project.title}
              className="group border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition duration-300"
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold">
                {project.title}
              </h3>

              {/* Hidden Content */}
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-3">
                <p className="text-gray-300 mb-3">
                  {project.description}
                </p>

                <p className="text-sm text-purple-400 font-medium">
                  {project.tech}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;