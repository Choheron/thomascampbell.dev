"use client"

import localFont from 'next/font/local'
import Marquee from './animata/container/marquee';
import AnimatedDock from './animata/container/animated-dock';
import Headshot from './headshot';
import WaveReveal from './animata/text/wave-reveal';

const BRFont = localFont({
  src: '../../public/fonts/blade_runner.ttf'
})

export default function IntroBlock() {
  const titles = [
    <p className="mx-2" key="title-SRE"><b>Site Reliability Engineer</b></p>,
    <p key="title-spacer-1"><b>-</b></p>,
    <p className="mx-2" key="title-Devops">DevSecOps Engineer</p>,
    <p key="title-spacer-2"><b>-</b></p>,
    <p className="mx-2" key="title-SWE">Software Engineer</p>,
    <p key="title-spacer-3"><b>-</b></p>,
    <p className="mx-2" key="title-FullStack">Full Stack Developer</p>,
    <p key="title-spacer-4"><b>-</b></p>,
    <p className="mx-2" key="title-Homelab">Homelab Enthusiast</p>,
    <p key="title-spacer-5"><b>-</b></p>,
  ]
  const dockLinks = [
    { title: "LinkedIn", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>, href: "https://www.linkedin.com/in/thomasrichardcampbell/" },
    { title: "Github", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>, href: "https://github.com/Choheron" },
    { title: "Resume", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9H9C9.55228 9 10 8.55228 10 8V2H20.0017C20.5531 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5511 3 20.9925V9ZM3 7L8 2.00318V7H3Z"></path></svg>, href: "/data/Thomas_Campbell_Resume.pdf" },
    { title: "Email", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 13.3414C21.3744 13.1203 20.7013 13 20 13C16.6863 13 14 15.6863 14 19C14 19.7013 14.1203 20.3744 14.3414 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13.3414ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM21 18H24V20H21V23H19V20H16V18H19V15H21V18Z"></path></svg>, href: "mailto:trc527@gmail.com" },
    { title: "Artstation", icon: <svg version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.8 195.9" className="scale-175"><style type="text/css"></style><g><path d="M51.4,123.3l8.9,15.4l0,0c1.8,3.5,5.4,5.9,9.5,5.9l0,0l0,0h59.3l-12.3-21.3H51.4z"/><path d="M157.2,123.4c0-2.1-0.6-4.1-1.7-5.8l-34.8-60.4c-1.8-3.4-5.3-5.7-9.4-5.7H92.9l53.7,93l8.5-14.7 C156.7,127,157.2,125.8,157.2,123.4z"/><polygon points="108.1,108.1 84.2,66.6 60.2,108.1"/></g></svg>, href: "https://choheron.artstation.com/" },
  ]
  

  return (
    <div className="relative mx-auto w-full max-w-[800px] h-fit text-white">
      <div className="max-w-full">
        <div className="py-20">
          <Headshot />
        </div>
        <p className="text-sm sm:text-base font-bold pl-4">Hello, my name is</p>
        <WaveReveal
          className={`${BRFont.className} text-[2rem] md:text-[4rem] mx-auto w-fit -my-3 text-white`}
          mode="word"
          text="Thomas Campbell"
        />
        <div className="relative flex h-fit w-full max-w-full items-center justify-center overflow-hidden rounded text-lg">
          <Marquee pauseOnHover>
            {titles.map((title) => {
              return(title)
            })}
          </Marquee>
        </div>
        <div className="absolute right-5 sm:relative w-fit mx-auto pt-2">
          <AnimatedDock 
            items={dockLinks} 
            largeClassName="max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}