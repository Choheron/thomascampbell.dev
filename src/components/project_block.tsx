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
      logo: <img loading="lazy" className="w-full mt-5" src="/images/projects/CordPal_Logo_Large_V1.svg" alt="CordPal Logo" />,
      description: "CordPal is a website created with the intention of extending the social connections Discord can provide. CordPal allows users to record quotes, submit photoshops, and participate in Album Of The Day!",
      href: "https://www.cordpal.app/",
      legacy: false,
      base_className: ""
    },
    { 
      title: "OllamTermUI",
      logo: <img loading="lazy" className="w-3/4 mx-auto -mt-3 rounded-2xl" src="https://github.com/Choheron/OllamaTermUI/blob/main/assets/OllamaTermUI_TitleCard.png?raw=true" alt="OllamaTermUI Title Card" />,
      description: "A textual terminal GUI for basic interaction with Ollama.",
      href: "https://github.com/Choheron/OllamaTermUI/tree/main",
      legacy: false,
      base_className: ""
    },
    { 
      title: "ThisWebsiteDoesNothing.com",
      logo: (
        <div className={`${bebas.className} text-base pt-8 select-none`}>
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
      logo: <img loading="lazy" className="w-50 pt-8" src="https://raw.githubusercontent.com/Choheron/InvenPro/refs/heads/master/driverBin/images/LogoV1Alpha.png" alt="InvenPro Logo" />,
      description: "InvenPro is a legacy, pre-alpha inventory program developed for a Land Surveying firm.",
      href: "https://github.com/Choheron/InvenPro",
      legacy: true,
      base_className: "",
    },
  ]

  return (
    <div id="project-section" className="w-full h-fit px-10 py-2 max-w-full">
      <h2 className="text-2xl underline pb-2">Projects:</h2>
      <p>I&apos;m always working on something new!</p>
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