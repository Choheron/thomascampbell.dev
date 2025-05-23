"use client"

import SwapText from "@/components/animata/text/swap-text";
import { Project } from "@/components/project_block";

interface FlipTextCardProps {
  initialText: string;
  finalText: string;
  projectObj: Project
}

export default function ProjectSwapTextCard({ initialText, finalText, projectObj }: FlipTextCardProps) {
  return (
    <div className={`relative group flex min-h-64 w-full flex-col justify-between rounded-3xl bg-white/10 dark:bg-black/10 border-2 border-black p-6 mt-5 md:max-w-[500px] hover:scale-105 transition duration-100 ${projectObj.base_className} overflow-hidden`}>
      <a className="absolute w-full h-full" href={projectObj.href} ></a>
      {projectObj.legacy &&
        <div className="absolute -left-14 top-7 -rotate-45 bg-yellow-500 w-50 text-center text-black">
          <p>Legacy</p>
        </div>
      }
      <div className="mx-auto">
        {projectObj.logo}
      </div>
      <div className="flex flex-col justify-between md:min-w-72">
        <div className="md:hidden">
          <div className="text-lg font-semibold text-black dark:text-white">{initialText}</div>
          <div className="text-sm font-medium text-black dark:text-gray-100">{finalText}</div>
        </div>
        <SwapText
          initialText={initialText}
          finalText={finalText}
          disableClick
          // Set min height so that all the text content fits
          // use -mb-7 to hide the extra space when not active
          className="-mb-7 hidden min-h-20 w-full transition-all duration-200 group-hover:mb-0 md:flex md:flex-col"
          initialTextClassName="text-lg group-hover:opacity-0 h-full duration-200 font-semibold text-black dark:text-white"
          finalTextClassName="text-sm h-full duration-200 font-medium text-black dark:text-gray-100"
        />
      </div>
    </div>
  );
}
