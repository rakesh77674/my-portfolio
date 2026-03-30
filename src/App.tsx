import { useState } from 'react';
// Ensure these filenames match your files exactly (e.g., Navbar.tsx, Hero.tsx)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Main Wrapper: 
          'bg-slate-50' is for Light Mode
          'dark:bg-slate-900' is for Dark Mode 
      */}
      <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans">
        
        {/* Pass darkMode state and the setDarkMode function to the Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;