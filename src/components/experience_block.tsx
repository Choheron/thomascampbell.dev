import { AnimatedTimeline } from "./animata/progress/animatedtimeline";

export default function ExperienceBlock() {
  const employmentEvents = [
    { 
      id: "1", 
      title: "Site Reliability Developer",
      company: "Oracle",
      location: "Hybrid - Austin, TX",
      description: "Site Reliability Developer with Oracle Cloud Infrastructure working on the Oracle Kubernetes Engine (OKE). Responsibilities include work Organizing and Conducting Deployments, Region Buildout/Expansions, Incident Response, etc. Focusing on developing automation, tools, and scalable solutions that ensure the high availability, performance, and resilience of OKE", 
      date: "October 2024 - Present"
    },
    { 
      id: "2", 
      title: "DevOps Engineer",
      description: "Devops Engineer focusing on Governmental Contracts. Working with cutting edge technologies to facilitate proper CI/CD and Agile Design Principals. Implements, Develops, and maintains CI/CD pipelines using Jenkins, Docker, and Kubernetes/Helm to automate the build, test, and deployment processes. Participates in daily stand-ups and on call rotations to swiftly address and resolve incidents with minimal downtime.", 
      company: "INADEV",
      location: "Remote, USA",
      date: "December 2022 - September 2024"
    },
    { 
      id: "3", 
      title: "Full Stack Dev/DevOps Intern",
      description: "Deveoped a deduplication script using Python, utilizing libraries such as numpy and recordlinkage. Worked to optimize algorithms and adapt to changing project requirements. Trained in DevOps to company standards in Terraform, AWS, Docker, Kubernetes, etc. to prepare for a transition to a full time DevOps Engineer.", 
      company: "INADEV",
      location: "McLean, VA",
      date: "June 2022 - December 2022"
    },
  ]

  return (
    <div className="w-full h-fit px-10 py-2 max-w-full">
      <p className="text-3xl underline pb-2"><b>Experience:</b></p>
      <div className="w-full mx-auto">
        <AnimatedTimeline
          events={employmentEvents}
        />
      </div>
    </div>
  )
}