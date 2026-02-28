
// Make sure the path to your profile image is correct
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center bg-gray-950 text-white px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 items-center gap-12 w-full max-w-7xl mx-auto">
        
        {/* LEFT SIDE: BIO CONTENT */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-purple-400">
              Welcome to my Portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
                Siri Naik
              </span>
            </h1>
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Passionate about AI and data science. I create applications that make everyday tasks easier and more efficient.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 font-bold transition-all shadow-lg shadow-purple-500/20 active:scale-95"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full border border-gray-700 hover:border-purple-500 transition-all font-bold active:scale-95"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: PROFILE IMAGE */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="relative group">
            {/* Animated Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
              <img 
                src={profile} 
                alt="Siri Naik Profile" 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;