import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
import ThemeSwitcher from "@/components/theme_switcher";

const ShareTechMono = localFont({
  src: '../../public/fonts/ShareTechMono-Regular.ttf'
})

export const metadata: Metadata = {
  title: "Thomas Campbell | Site Reliability Engineer",
  description: "Thomas Campbell is a Site Reliability Engineer for Oracle Kubernetes Engine with a passion for Kubernetes, Automation, Highly Available Systems, and Software Engineering.",
  keywords: "Thomas Campbell, Thomas Richard Campell, ChoHeron, Web Developer, Full Stack, Game Designer, Game Programmer, Game Developer, Software Engineer, Web Design, George Mason University Computer Science, Computer Science, Applied Computer Science, DevOps, DevSecOps, Scrum, DevOps Engineer, DevSecOps Engineer, Jenkins, Github, CI/CD, Automation",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ShareTechMono.className} relative antialiased bg-white dark:bg-slate-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="absolute top-2 left-2 z-[10000000000]">
            <ThemeSwitcher />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
