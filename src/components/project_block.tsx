import { ReactElement } from "react"
import ProjectSwapTextCard from "./animata/card/project-swap-text-card"
import { Bebas_Neue } from "next/font/google"

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
})

export type Project = { 
  title: string,
  logo: ReactElement,
  description: string,
  href: string,
  legacy: boolean,
  base_className: string
}

export default function ProjectBlock() {
  const projects: Project[] = [
    { 
      title: "CordPal",
      logo: <img loading="lazy" className="w-full mt-5" src="/images/projects/CordPal_Logo_Large_V1.svg" />,
      description: "CordPal is a website created with the intention of extending the social connections Discord can provide. CordPal allows users to record quotes, submit photoshops, and participate in Album Of The Day!",
      href: "https://www.cordpal.app/",
      legacy: false,
      base_className: ""
    },
    { 
      title: "ThisWebsiteDoesNothing.com",
      logo: (
        <div className={`${bebas.className} text-base pt-8 text-dark dark:text-white select-none`}>
          <p>Well...</p>
          <p className="text-3xl -my-2">What did you expect?</p>
          <p className="text-right">...Something?</p>
        </div>
      ),
      description: "Exactly what it sounds like! This website does nothing.",
      href: "https://www.thiswebsitedoesnothing.com/",
      legacy: false,
      base_className: "",
    },
    { 
      title: "InvenPro",
      logo: <img loading="lazy" className="w-50 pt-8" src="https://raw.githubusercontent.com/Choheron/InvenPro/refs/heads/master/driverBin/images/LogoV1Alpha.png" />,
      description: "InvenPro was created as a beta test inventory program for a land surveying company. Built this for the company I worked for in college.",
      href: "https://github.com/Choheron/InvenPro",
      legacy: true,
      base_className: "",
    },
  ]

  return (
    <div id="project-section" className="w-full h-fit px-10 py-2 max-w-full text-xl">
      <p className="text-3xl underline pb-2">Projects:</p>
      <p>I am constantly looking to create new things and learn new technologies, be it personal projects or testing ideas. I&apos;m always working on something new! You can see my projects below.</p>
      <div className="flex flex-wrap justify-around w-full">
        {projects.map((project, index) => {
          return (
            <ProjectSwapTextCard 
              key={`project-${index}`}
              initialText={project.title}
              finalText={project.description}
              projectObj={project}
            />
          )
        })}
      </div>
    </div>
  )
}