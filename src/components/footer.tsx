export default function Footer() {
   const currYear = new Date().getFullYear()

  return (
    <div className="w-full flex justify-center py-2">
      <div>
        <p>&copy;{currYear} - Thomas Campbell - All Rights Reserved</p>
      </div>
    </div>
  )
}