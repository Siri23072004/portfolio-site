import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 text-white space-y-32">
      {/* This is the main 'About' container. 
          It stacks your detailed sections vertically with consistent spacing.
      */}
      
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-20 leading-relaxed">
         Hi, I'm Siri Naik  from Siddapura, Karnataka. I specialize in Python programming, web development with HTML, and data visualization using Tableau, and I am deeply interested in AI. I enjoy exploring AI concepts and applying them alongside my projects to create smart and interactive solutions.
I love turning data into insights, building functional web applications, and continuously learning new technologies to solve real-world problems efficiently.
        </p>

        {/* Sub-sections */}
        <Education />
        <Skills />
        <Projects />
        <Certifications />
      </div>
    </section>
  );
};


export default About;
