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
  {
    title: "Pricing",
    description: "Cost of ClickReporter.",
    basic: "Free",
    pro: "Single $7 Charge",
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
          <a
            href="https://chromewebstore.google.com/detail/clickreporter/elmgmogcofihlnbejmajpdgnjjelgpnk"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 px-5 py-3 rounded-xl border border-foreground/15 bg-bg-accent/40 hover:bg-bg-accent/60 transition-colors"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z"/>
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] text-foreground/50 uppercase tracking-wider">Available on</span>
              <span className="text-sm font-medium">Chrome Web Store</span>
            </div>
          </a>
           <a
            href="https://addons.mozilla.org/en-US/firefox/addon/clickreporter/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 px-5 py-3 rounded-xl border border-foreground/15 bg-bg-accent/40 hover:bg-bg-accent/60 transition-colors"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.452 3.445a11.002 11.002 0 00-2.482-1.908C16.944.997 15.098.093 12.477.032c-.734-.017-1.457.03-2.174.144-.72.114-1.398.292-2.118.56-1.017.377-1.996.975-2.574 1.554.583-.349 1.476-.733 2.55-.992a10.083 10.083 0 013.729-.167c2.341.34 4.178 1.381 5.48 2.625a8.066 8.066 0 011.298 1.587c1.468 2.382 1.33 5.376.184 7.142-.85 1.312-2.67 2.544-4.37 2.53-.583-.023-1.438-.152-2.25-.566-2.629-1.343-3.021-4.688-1.118-6.306-.632-.136-1.82.13-2.646 1.363-.742 1.107-.7 2.816-.242 4.028a6.473 6.473 0 01-.59-1.895 7.695 7.695 0 01.416-3.845A8.212 8.212 0 019.45 5.399c.896-1.069 1.908-1.72 2.75-2.005-.54-.471-1.411-.738-2.421-.767C8.31 2.583 6.327 3.061 4.7 4.41a8.148 8.148 0 00-1.976 2.414c-.455.836-.691 1.659-.697 1.678.122-1.445.704-2.994 1.248-4.055-.79.413-1.827 1.668-2.41 3.042C.095 9.37-.2 11.608.14 13.989c.966 5.668 5.9 9.982 11.843 9.982C18.62 23.971 24 18.591 24 11.956a11.93 11.93 0 00-3.548-8.511z"/>
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] text-foreground/50 uppercase tracking-wider">Available on</span>
              <span className="text-sm font-medium">Firefox Add-ons</span>
            </div>
          </a>
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
                <th className="text-center px-5 py-3 font-semibold text-foreground/70 w-24 text-xs">Pro</th>
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
            { step: "3", title: "Click & report", body: "Navigate to any supported social media post or any website, utilize the ClickReporter button, and select your desired webhook or group." },
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
        <Link href="/" className="underline hover:text-foreground/70 transition-colors mr-1">
          Thomas Campbell
        </Link>
        -
        <Link href={"/clickreporter/privacy-policy"} className="underline hover:text-foreground/70 transition-colors ml-1">
          Privacy Policy
        </Link>
      </footer>

    </div>
  )
}
