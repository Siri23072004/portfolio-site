import Navbar from "./components/Navbar";
import Home from "./components/Hero"; 
import AboutSection from "./components/About";
 import Contact from "./components/Contact";
 // Use the new name from Step 1

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Home />
        <AboutSection />
        {/* ADD THIS LINE BELOW */}
        <Contact /> 
      </main>
    </div>
  );
}

export default App;