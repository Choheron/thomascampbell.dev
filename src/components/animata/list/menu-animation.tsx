import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface MenuAnimationProps {
  menuItems: { node: ReactNode, svg: ReactNode }[];
}

export default function MenuAnimation({ menuItems }: MenuAnimationProps) {
  return (
    <div className="flex min-w-fit flex-col gap-2 overflow-hidden px-10 justify-center">
      {menuItems.map((item, index) => (
        <div key={index} className="group flex items-center gap-2 w-fit mx-auto">
          {(item.svg) ? (
            <div className="size-5 text-black opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:text-blue-500 group-hover:opacity-100 md:size-10">
              {item.svg}
            </div>
          ):(
            <ArrowRight className="size-5 text-black opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:text-blue-500 group-hover:opacity-100 md:size-10"/>
          )}
          <h1 className="z-10 cursor-pointer font-mono font-semibold text-black transition-transform duration-300 ease-out group-hover:text-blue-500 dark:text-white md:text-4xl md group-hover:scale-110">
            {item.node}
          </h1>
          {(item.svg) ? (
            <div className="size-5 text-black opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:text-blue-500 group-hover:opacity-100 md:size-10">
              {item.svg}
            </div>
          ):(
            <ArrowRight className="size-5 text-black opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:text-blue-500 group-hover:opacity-100 md:size-10" />
          )}
        </div>
      ))}
    </div>
  );
}
