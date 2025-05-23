"use client"

import AboutBlock from "@/components/about_block";
import IntroBlock from "../components/intro_block";
import ProjectBlock from "@/components/project_block";
import ExperienceBlock from "@/components/experience_block";
import Footer from "@/components/footer";
import MenuAnimation from "@/components/animata/list/menu-animation";
import CertsBlock from "@/components/certs_block";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <div className="mx-auto w-full text-black dark:text-white">
      <div id="home" className="relative bg-[url(/images/background/backgroundLight.jpg)] dark:bg-[url(/images/background/backgroundDark.jpg)] bg-center bg-cover h-[100vh] content-center">
        <IntroBlock />
        <div className="absolute bottom-10">
          <MenuAnimation
            menuItems={[
              <p key="menu-1" onClick={() => scrollToSection("home")}>Home</p>,
              <p key="menu-2" onClick={() => scrollToSection("about-section")}>About</p>,
              <p key="menu-3" onClick={() => scrollToSection("project-section")}>Projects</p>,
              <p key="menu-4" onClick={() => scrollToSection("experience-section")}>Experience</p>,
              <p key="menu-5" onClick={() => scrollToSection("certifications-section")}>Certifications</p>
            ]}
        />
        </div>
      </div>
      <div id="about-section" className="bg-blue-400 dark:bg-gray-900/80 max-w-full py-5">
        <AboutBlock />
      </div>
      <div id="project-section" className="bg-white dark:bg-purple-800/80 max-w-full py-5">
        <ProjectBlock />
      </div>
      <div id="experience-section" className="bg-blue-400 dark:bg-gray-900/80 max-w-full py-5">
        <ExperienceBlock />
      </div>
      <div id="certifications-section" className="bg-white dark:bg-purple-800/80 max-w-full py-5">
        <CertsBlock />
      </div>
      <div id="footer" className="bg-blue-400 dark:bg-gray-900/80 max-w-full">
        <Footer />
      </div>
    </div>
  );
}
