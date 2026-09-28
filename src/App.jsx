import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Preloader onFinish={() => setIsLoaded(true)} />
      <div
        className={`min-h-screen overflow-x-hidden transition-all duration-1000 ease-out ${
          isLoaded
            ? "opacity-100 filter-none translate-y-0"
            : "opacity-0 blur-sm translate-y-3"
        }`}
      >
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
