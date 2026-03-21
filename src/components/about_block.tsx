export default function AboutBlock() {
  const aboutMeText = `	
	  I am <b>Thomas Campbell</b>, a <i>Site Reliability Engineer</i> based in Austin, TX, currently working on the <b>Oracle Kubernetes Engine</b> at OCI. I build highly available, scalable, and automated systems that enable teams to deliver software efficiently and reliably using <b>Kubernetes</b>, <b>Cloud Infrastructure</b>, <b>Automation</b>, and <b>Software Development</b>.
    I have spent my career building, deploying, maintaining, and scaling robust and highly available applications, systems, and services.
    <br><br>
    I find myself driven by my need to create.
	`


  return (
    <div id="about-section" className="w-full h-fit px-10 py-2 max-w-full">
      <h2 className="text-2xl underline pb-2"><b>About:</b></h2>
      {/* Description */}
      <div dangerouslySetInnerHTML={{ __html: aboutMeText }}/>
    </div>
  )
}