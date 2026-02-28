const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-gray-950 text-white px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl flex flex-col items-start text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Contact Me
        </h2>

        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 shadow-2xl flex flex-col gap-6 w-full max-w-md">
          <div className="flex items-center gap-4">
            <span className="text-green-400 text-2xl">📞</span>
            <p className="text-gray-200 text-lg font-medium">+91-8123087216</p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 text-2xl">📧</span>
            <p className="text-gray-200 text-lg font-medium">sirianil2004@gmail.com</p>
          </div>

          <a 
            href="mailto:sirianil2004@gmail.com" 
            className="mt-4 py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-center text-white hover:scale-105 transition-all"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;