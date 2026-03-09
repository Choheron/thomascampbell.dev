import type { Metadata } from "next";
import "../globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
import ThemeSwitcher from "@/components/theme_switcher";

const rootUrl = "https://thomascampbell.dev";
const siteUrl = `${rootUrl}/clickreporter`;
const siteDescription = "ClickReporter is a browser extension allowing for direct sending of social media posts and websites to a configured Discord Webhook or group of Discord Webhooks.";
const siteTitle = "ClickReporter | Monitor Fast";
const ogImage = "/images/projects/clickrepoter/Logo_Pro_4x3_Transparent.png";

export const metadata: Metadata = {
  metadataBase: new URL(rootUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: "ClickReporter, Discord Webhooks, Discord, Social Share, Share to Discord, Direct to Discord, Webhooks, Browser Extension, Firefox Extension, Chrome Extension, Social Media Monitoring, Reddit, Twitter, YouTube, Instagram",
  authors: [{ name: "Thomas Campbell", url: rootUrl }],
  icons: {
    icon: '/images/projects/clickrepoter/logos/logo_48.png'
  },
  alternates: {
    canonical: "/clickreporter",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
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
              image: `${rootUrl}${ogImage}`,
              description: siteDescription,
              applicationCategory: "BrowserApplication",
              applicationSubCategory: "Browser Extension",
              operatingSystem: "Firefox, Chrome",
              browserRequirements: "Requires Firefox or Chrome browser",
              featureList: [
                "Send social media posts directly to Discord",
                "Configure multiple Discord Webhooks",
                "Group webhooks for bulk sharing",
                "Support for Reddit, Twitter/X, YouTube, Instagram",
                "One-click sharing from any supported page",
              ],
              author: {
                "@type": "Person",
                name: "Thomas Campbell",
                url: rootUrl,
                email: "business@thomascampbell.dev",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
