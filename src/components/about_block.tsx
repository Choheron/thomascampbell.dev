export default function AboutBlock(props) {
  const aboutMeText = `	
	  I'm <b>Thomas Campbell</b>, a <i>Site Reliability Engineer/Developer</i> based in Austin, TX. With a professional passion for Creation, Automation,
		CI/CD, Agile Methodologies, and all things DevOps. I strive to constantly improve and learn! Finding satisfaction in enhancing my skills, I am dedicated to creating functional, 
    practical, and scaleable systems/content.
		<br/><br/>
		I have focused my career on Kubernetes, Cloud Providers/Infrastructure, Automation, Software Development, and Reliability. I am driven by a desire to reduce unnecessary work through scripting, automation, and self-healing systems.
		<br/><br/>
		In my free time I keep busy maintaining a homelab, hiking, climbing, camping, coding personal projects, woodworking, tending to my animals, and playing games.
    <br/><br/>
	`


  return (
    <div id="about-section" className="w-full h-fit px-10 py-2 max-w-full text-xl">
      <p className="text-3xl underline pb-2"><b>About me:</b></p>
      {/* Description */}
      <div dangerouslySetInnerHTML={{ __html: aboutMeText }}/>
    </div>
  )
}