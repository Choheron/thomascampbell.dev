"use client"

import Link from "next/link"

const features = [
  {
    title: "One-Click Sharing to Configured Webhooks",
    description: "Right-click any post, tweet, or video and send it directly to Discord without leaving the page.",
    basic: "2",
    pro: "Unlimited",
  },
  {
    title: "Add a Message to the shared link",
    description: "Include a custom message with the shared links/posts.",
    basic: "✅",
    pro: "✅",
  },
  {
    title: "Rich Embeds",
    description: "Content is sent as rich Discord embeds with titles, descriptions, and images preserved.",
    basic: "✅",
    pro: "✅",
  },
  {
    title: "Whole Page Sharing",
    description: "Utilize the popup to share any page you are currently on.",
    basic: "✅",
    pro: "✅",
  },
  {
    title: "Webhook Groups",
    description: "Configure webhook groups to send a single post to multiple webhooks at once.",
    basic: "❌",
    pro: "Unlimited",
  },
]

const supported_socials = [
  {
    title: "Twitter/X",
    methods: ["Posts (Timeline)", "Posts (Focused)"],
    coming_soon: ["Profiles"]
  },
  {
    title: "Youtube",
    methods: ["Videos (Browse)", "Videos (Watch Page)"],
    coming_soon: ["Channels", "Shorts"]
  },
  {
    title: "Reddit",
    methods: ["Posts (Feed)", "Posts (Post Page)"],
    coming_soon: ["Subreddits", "Profiles"]
  },
  {
    title: "Facebook Marketplace",
    methods: ["Listings"],
    coming_soon: ["None Planned"]
  },
  {
    title: "Any Page",
    methods: ["Page URL (Via Settings Modal, Automatically Trims URL Params)"],
    coming_soon: ["N/A"]
  }
]

const screenshots = [
  {
    src: "/images/projects/clickreporter/screenshots/BasicPopup_V1.png",
    alt: "ClickReporter popup UI",
    caption: "Settings popup for quick webhook management",
  },
  {
    src: "/images/projects/clickreporter/screenshots/RedditExample_V1.png",
    alt: "ClickReporter on Reddit",
    caption: "Share reddit posts directly to Discord",
  },
  {
    src: "/images/projects/clickreporter/screenshots/TwitterCLickReporterExample_V1.png",
    alt: "Twitter post shared via ClickReporter",
    caption: "Share tweets directly to Discord",
  },
  {
    src: "/images/projects/clickreporter/screenshots/YoutubeVideoEmbed_V1.png",
    alt: "YouTube video embedded in Discord via ClickReporter",
    caption: "YouTube videos appear as rich embeds",
  },
  {
    src: "/images/projects/clickreporter/screenshots/WebhookSelectionPopup.png",
    alt: "Visual Popup for selecting Webhooks or Groups",
    caption: "Having multiple popups configured prompts a selection popup",
  },
]

export default function ClickReporterPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">

      {/* Nav */}
      <nav className="w-full px-8 py-4 flex items-center justify-end border-b border-foreground/10">
        <Link href="/" className="text-sm text-foreground/50 ml-10 hover:text-foreground transition-colors duration-150">
          thomascampbell.dev
        </Link>
      </nav>

      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-8 pt-20 pb-16 flex flex-col items-center text-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/projects/clickreporter/Logo_Pro_4x3_Transparent.png"
          alt="ClickReporter Logo"
          width={180}
          height={135}
          className="drop-shadow-xl"
        />
        <h1 className="text-5xl font-bold tracking-tight">ClickReporter</h1>
        <p className="text-lg text-foreground/60 max-w-xl leading-relaxed">
          A browser extension for sending social media posts and websites directly to your Discord webhooks — in one click.
        </p>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <div className="relative flex items-center gap-3 px-5 py-3 rounded-xl border border-foreground/15 bg-bg-accent/40 opacity-60 cursor-not-allowed select-none">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.48 1.806 1.773 0 3.141-1.872 3.141-4.573 0-2.39-1.718-4.061-4.169-4.061-2.84 0-4.508 2.131-4.508 4.333 0 .858.33 1.776.741 2.28a.3.3 0 0 1 .069.285c-.076.313-.243.995-.276 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.478 10-10S17.522 2 12 2z"/>
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] text-foreground/50 uppercase tracking-wider">Coming Soon</span>
              <span className="text-sm font-medium">Chrome Web Store</span>
            </div>
          </div>
          <div className="relative flex items-center gap-3 px-5 py-3 rounded-xl border border-foreground/15 bg-bg-accent/40 opacity-60 cursor-not-allowed select-none">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c2.352 0 4.484.872 6.1 2.3L7.8 18.1A8.468 8.468 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5zm0 17c-2.352 0-4.484-.872-6.1-2.3L16.2 5.9A8.468 8.468 0 0 1 20.5 12c0 4.687-3.813 8.5-8.5 8.5z"/>
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] text-foreground/50 uppercase tracking-wider">Coming Soon</span>
              <span className="text-sm font-medium">Firefox Add-ons</span>
            </div>
          </div>
        </div>
        <Link
          href="https://clickreporter.lemonsqueezy.com/checkout/buy/100c477a-057c-452d-ac8b-f8b524221b09"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity duration-150"
        >
          Buy Pro License
        </Link>
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">Features</h2>
        <div className="rounded-2xl border border-foreground/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground/10 bg-foreground/5">
                <th className="text-left px-5 py-3 font-semibold text-foreground/70 w-1/4">Feature</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground/70">Description</th>
                <th className="text-center px-5 py-3 font-semibold text-foreground/70 w-24">Basic</th>
                <th className="text-center px-5 py-3 font-semibold text-foreground/70 w-24">Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature.title} className={i % 2 === 0 ? "" : "bg-foreground/2"}>
                  <td className="px-5 py-4 font-semibold align-top">{feature.title}</td>
                  <td className="px-5 py-4 text-foreground/60 leading-relaxed align-top">{feature.description}</td>
                  <td className="px-5 py-4 text-center text-foreground/60 align-top">{feature.basic}</td>
                  <td className="px-5 py-4 text-center text-foreground/60 align-top">{feature.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">Supported Socials</h2>
        <div className="rounded-2xl border border-foreground/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground/10 bg-foreground/5">
                <th className="text-left px-5 py-3 font-semibold text-foreground/70 w-1/4">Feature</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground/70">Supported Methods</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground/70">Planned Methods</th>
              </tr>
            </thead>
            <tbody>
              {supported_socials.map((social, i) => (
                <tr key={social.title} className={i % 2 === 0 ? "" : "bg-foreground/2"}>
                  <td className="px-5 py-4 font-semibold align-top">{social.title}</td>
                  <td className="px-5 py-4 text-foreground/60 leading-relaxed align-top">{social.methods.map((method, i) => (<p>{method}</p>))}</td>
                  <td className="px-5 py-4 text-foreground/60 leading-relaxed align-top">{social.coming_soon?.map((method, i) => (<p>{method}</p>))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Screenshots */}
      <section className="w-full max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">Screenshots</h2>
        <div className="columns-1 md:columns-3 gap-6">
          {screenshots.map((shot) => (
            <div key={shot.src} className="break-inside-avoid mb-6 flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden border border-foreground/10 bg-bg-accent/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-foreground/50 text-center">{shot.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="w-full max-w-3xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">How It Works</h2>
        <ol className="flex flex-col gap-6">
          {[
            { step: "1", title: "Install the extension", body: "Add ClickReporter to Firefox or Chrome from the extension store." },
            { step: "2", title: "Add a Discord webhook", body: "Open the popup and paste in one or more Discord webhook URLs from your server settings." },
            { step: "3", title: "Right-click & report", body: "Navigate to any supported social media post or any website, utilize the ClickReporter button, and select your desired webhook or group." },
          ].map(({ step, title, body }) => (
            <li key={step} className="flex gap-5 items-start">
              <span className="shrink-0 w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                {step}
              </span>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-foreground/10 mt-8 py-8 px-8 text-center text-xs text-foreground/40">
        Built by{" "}
        <Link href="/" className="underline hover:text-foreground/70 transition-colors">
          Thomas Campbell
        </Link>
        {" · "}Free & Open Source
      </footer>

    </div>
  )
}
