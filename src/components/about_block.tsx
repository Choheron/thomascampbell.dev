export default function AboutBlock() {
  const aboutMeText = `	
	  I am <b>Thomas Campbell</b>, a <i>Site Reliability Engineer</i> based in Austin, TX, currently working on the <b>Oracle Kubernetes Engine</b> at OCI. I specialize in building and maintaining highly available, scalable, and automated systems that enable teams to deliver software efficiently and reliably. My professional focus lies in <b>Kubernetes</b>, <b>Cloud Infrastructure</b>, <b>Automation</b>, and <b>Software Development</b>.
    I have spent my professional career building, deploying, maintaining, and scaling robust and highly available applications, systems, and services.
    <br><br>
    I am passionate about reducing unnecessary manual work through scripting, intelligent automation, and self-healing systems, helping organizations move faster with confidence. 
    <br><br>
    Outside of work, I enjoy maintaining my homelab, hiking, climbing, camping, building personal projects, woodworking, caring for my animals, and gaming.
	`


  return (
    <div id="about-section" className="w-full h-fit px-10 py-2 max-w-full">
      <h2 className="text-2xl underline pb-2"><b>About:</b></h2>
      {/* Description */}
      <div dangerouslySetInnerHTML={{ __html: aboutMeText }}/>
    </div>
  )
}