
export default function Headshot(props) {
  return (
    <div className="shrink-0 mx-auto w-fit">
      <img 
        src="/images/headshot/ThomasHeadshotCropped.jpg" 
        className="rounded-full border-2 border-black hover:border-blue-500 transition-colors duration-300 ease-in-out"
        width={250}
        height={250}
      />
    </div>
  )
}