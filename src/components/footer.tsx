export default function Footer() {
   const currYear = new Date().getFullYear()

  return (
    <div className="w-full flex justify-center py-2">
      <div>
        <div className="flex gap-1">
        <p className="text-xs">&copy;</p>
        <p>{currYear} - Thomas Campbell - All Rights Reserved</p>
        </div>
        <p className="mx-auto w-fit">Special thanks to <a href={"https://animata.design/"} className="hover:underline text-blue-500 my-auto" >Animata</a></p>
      </div>
    </div>
  )
}