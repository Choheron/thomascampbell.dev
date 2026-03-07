import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
import ThemeSwitcher from "@/components/theme_switcher";

const ShareTechMono = localFont({
  src: '../../public/fonts/ShareTechMono-Regular.ttf'
})

const siteUrl = "https://thomascampbell.dev";
const siteDescription = "Thomas Campbell is a Site Reliability Engineer for Oracle Kubernetes Engine with a passion for Kubernetes, Automation, Highly Available Systems, and Software Engineering.";
const siteTitle = "Thomas Campbell | Site Reliability Engineer";
const ogImage = "/images/headshot/ThomasHeadshotCropped.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: "Thomas Campbell, Thomas Richard Campbell, ChoHeron, Site Reliability Engineer, SRE, Oracle, Kubernetes, DevOps, DevSecOps, Automation, CI/CD, Jenkins, GitHub, Software Engineer, Web Developer, Full Stack, George Mason University, Computer Science",
  authors: [{ name: "Thomas Campbell", url: siteUrl }],
  icons: {
    icon: '/favicon.png'
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Thomas Campbell",
    images: [
      {
        url: ogImage,
        width: 800,
        height: 800,
        alt: "Thomas Campbell - Site Reliability Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ShareTechMono.className} relative antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thomas Campbell",
              url: siteUrl,
              image: `${siteUrl}${ogImage}`,
              jobTitle: "Site Reliability Engineer",
              worksFor: { "@type": "Organization", name: "Oracle" },
              alumniOf: { "@type": "CollegeOrUniversity", name: "George Mason University" },
              sameAs: [
                "https://www.linkedin.com/in/thomasrichardcampbell/",
                "https://github.com/Choheron",
                "https://choheron.artstation.com/",
              ],
              email: "trc527@gmail.com",
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="absolute top-2 left-2 z-10000000000">
            <ThemeSwitcher />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
