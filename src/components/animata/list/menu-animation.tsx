import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface MenuAnimationProps {
  menuItems: { node: ReactNode, svg: ReactNode }[];
}

export default function MenuAnimation({ menuItems }: MenuAnimationProps) {
  return (
    <div className="flex min-w-fit flex-col gap-2 overflow-hidden justify-center">
      {menuItems.map((item, index) => (
        <div key={index} className="group flex items-center gap-2 w-fit ml-auto">
          {(item.svg) ? (
            <div className="size-5 opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:text-fg-accent group-hover:opacity-100 md:size-10 group-hover:-translate-x-5">
              {item.svg}
            </div>
          ):(
            <ArrowRight className="size-5 opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:text-fg-accent group-hover:opacity-100 md:size-10 group-hover:-translate-x-5"/>
          )}
          <h1 className="z-10 cursor-pointer font-mono font-semibold transition-transform duration-300 ease-out group-hover:text-fg-accent text-2xl md:text-4xl md:group-hover:scale-110 group-hover:-translate-x-3">
            {item.node}
          </h1>
        </div>
      ))}
    </div>
  );
}
