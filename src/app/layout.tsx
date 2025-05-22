import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const ShareTechMono = localFont({
  src: '../../public/fonts/ShareTechMono-Regular.ttf'
})

export const metadata: Metadata = {
  title: "Thomas Campbell",
  description: "Thomas Campbell Portfolio Website",
  keywords: "Thomas Campbell, Thomas Richard Campell, ChoHeron, Web Developer, Full Stack, Game Designer, Game Programmer, Game Developer, Software Engineer, Web Design, George Mason University Computer Science, Computer Science, Applied Computer Science, DevOps, DevSecOps, Scrum, DevOps Engineer, DevSecOps Engineer, Jenkins, Github, CI/CD, Automation",
  icons: {
    icon: '/favicon.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${ShareTechMono.className} antialiased bg-white dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
