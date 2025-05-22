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
    <div className="mx-auto w-full">
      <div id="home" className="relative bg-[url(/images/background/BackgroundLight.jpg)] dark:bg-[url(/images/background/BackgroundDark.jpg)] bg-center bg-cover h-[100vh] content-center">
        <IntroBlock />
        <div className="absolute bottom-10">
          <MenuAnimation
            menuItems={[
              <p onClick={() => scrollToSection("home")}>Home</p>,
              <p onClick={() => scrollToSection("about-section")}>About</p>,
              <p onClick={() => scrollToSection("project-section")}>Projects</p>,
              <p onClick={() => scrollToSection("experience-section")}>Experience</p>,
              <p onClick={() => scrollToSection("certifications-section")}>Certifications</p>
            ]}
        />
        </div>
      </div>
      <div id="about-section" className="bg-gray-400 dark:bg-gray-900/80 max-w-full py-5">
        <AboutBlock />
      </div>
      <div id="project-section" className="bg-purple-400 dark:bg-purple-800/80 max-w-full py-5">
        <ProjectBlock />
      </div>
      <div id="experience-section" className="bg-blue-400 dark:bg-blue-900/80 max-w-full py-5">
        <ExperienceBlock />
      </div>
      <div id="certifications-section" className="bg-pink-400 dark:bg-pink-900/80 max-w-full py-5">
        <CertsBlock />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
