export default function SkillsBlock() {
  type Skill = {
    title: string;
    hoverText: string;
  }
  
  const skillObjs: {category: string, skills: Skill[]}[] = [
    {
      category: "DevOps/SRE",
      skills: 
        [
          { title: "Kubernetes", hoverText: "Extensive experience with Kubenrnetes as both a User-Developer-Administrator, and a Cloud Service Provider (OKE Site Reliability Engineer)" },
          { title: "CI/CD", hoverText: "Experience with Jenkins, Github Actions, Shell Scripting, Python Scripting, Ansible, and managing large scale releases." },
          { title: "Infrastructure as Code", hoverText: "Well versed in Terraform and Cloudformation for regular infra creation and cleanup." },
          { title: "Highly Available Applications", hoverText: "Expertise in building, deploying, and scaling highly available apps serving millions of customers daily." },
        ]
    },
    {
      category: "Coding/SWE",
      skills: 
        [
          { title: "Python", hoverText: "" },
          { title: "Terraform", hoverText: "" },
          { title: "Javascript", hoverText: "" },
          { title: "Java", hoverText: "" },
          { title: "Shell Scripting", hoverText: "" },
        ]
    },
    {
      category: "Web Development",
      skills: 
        [
          { title: "NextJS", hoverText: "" },
          { title: "React", hoverText: "" },
          { title: "Django", hoverText: ""},
          { title: "Rest APIs", hoverText: ""}
        ]
    }
  ]

  function skillSort(a: Skill, b: Skill) {
    return (b.title < a.title ? 1 : 0)
  }

  return (
    <div className="relative w-full h-fit px-10 py-2 max-w-full">
      <p className="text-3xl underline pb-2"><b>Skills:</b></p>
      <div className="w-full mr-auto flex justify-evenly ml-0">
        {skillObjs.map((obj, catIndex) => {
          return (
            <div key={catIndex} className="flex flex-col">
              <p className="text-lg"><b>{obj.category}</b></p>
              {
                obj.skills.sort(skillSort).map((skill, skillIndex) => {
                  return (
                    <div className="relative group transition-all">
                      <p key={skillIndex} className="ml-2 z-0">{skill.title}</p>
                      <div className="absolute top-0 transition-all invisible group-hover:visible opacity-0 group-hover:opacity-100 z-50">
                        {(skill.hoverText != "") ? (
                          <div className="bg-gray-900 border border-black rounded-2xl p-2">
                          <p className="text-lg">{skill.title}</p>
                          <hr></hr>
                          <p className="min-w-[300px]">{skill.hoverText}</p>
                        </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}