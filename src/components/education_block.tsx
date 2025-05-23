import { EducationAnimatedTimeline } from "./animata/progress/educationanimatedtimeline";

export default function EducationBlock() {
  const educationEvents = [
    { 
      id: "1", 
      school: "George Mason University",
      degree: "B.S. Applied Computer Science - Concentrated in Game Design",
      subdegree: "Minor in Software Engineering",
      location: "Fairfax, VA", 
      date: "Fall 2018 - Spring 2023"
    },
  ]

  return (
    <div className="w-full h-fit px-10 py-2 max-w-full">
      <p className="text-3xl underline pb-2"><b>Education:</b></p>
      <div className="w-full mx-auto">
        <EducationAnimatedTimeline
          events={educationEvents}
        />
      </div>
    </div>
  )
}