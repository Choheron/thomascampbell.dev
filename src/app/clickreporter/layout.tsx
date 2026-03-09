import type { Metadata } from "next";
import "../globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
import ThemeSwitcher from "@/components/theme_switcher";

const siteUrl = "https://thomascampbell.dev/clickreporter";
const siteDescription = "ClickReporter is a browser extension allowing for direct sending of social media posts and websites to a configured Discord Webhook or group of Discord Webhooks.";
const siteTitle = "ClickRepoter | Monitor Fast";
const ogImage = "/images/projects/clickrepoter/Logo_Pro_4x3_Transparent.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: "ClickReporter, Discord Webhooks, Discord, Social, Share, Direct to Discord, Webhooks",
  authors: [{ name: "Thomas Campbell", url: siteUrl }],
  icons: {
    icon: '/images/projects/clickrepoter/logos/logo_48.png'
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
    siteName: "ClickReporter",
    images: [
      {
        url: ogImage,
        width: 800,
        height: 800,
        alt: "ClickReporter Pro Logo",
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
        className={`relative antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ClickReporter",
              url: siteUrl,
              image: `https://thomascampbell.dev${ogImage}`,
              description: siteDescription,
              applicationCategory: "BrowserApplication",
              operatingSystem: "Firefox, Chrome",
              author: {
                "@type": "Person",
                name: "Thomas Campbell",
                url: "https://thomascampbell.dev",
                email: "business@thomascampbell.dev",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
