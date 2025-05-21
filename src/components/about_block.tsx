
export default function AboutBlock(props) {
  const aboutMeText = `	
	  I'm <b>Thomas Campbell</b>, a <i>Site Reliability Engineer/Developer</i> based in Austin, TX. With a professional passion for Creation, Automation,
		CI/CD, Agile Methodologies, and all things DevOps, I strive to constantly improve and learn! Finding satisfaction in enhancing my skills, I am dedicated to creating functional, 
    practical, and scaleable systems/content.
		<br/><br/>
		I have focused my career on Kubernetes, Cloud Providers, Software Development, and Reliability.
		<br/><br/>
		In my free time I keep busy maintaining a homelab, climbing, coding personal projects, woodworking, tending to my animals, and playing games.
    <br/><br/>
	`

  return (
    <div id="about-section" className="w-full px-10 py-2 max-w-full">
      <p className="text-3xl underline pb-2">About me</p>
      <div dangerouslySetInnerHTML={{ __html: aboutMeText }}/>
      
    </div>
  )
}