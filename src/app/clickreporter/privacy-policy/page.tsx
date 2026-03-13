import Link from "next/link"

export const metadata = {
  title: "ClickReporter – Privacy Policy",
  description: "Privacy policy for the ClickReporter browser extension.",
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">

      {/* Nav */}
      <nav className="w-full px-8 py-4 flex items-center justify-between border-b border-foreground/10">
        <Link href="/clickreporter" className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-150">
          ← ClickReporter
        </Link>
        <Link href="/" className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-150">
          thomascampbell.dev
        </Link>
      </nav>

      {/* Content */}
      <main className="w-full max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-2">ClickReporter Privacy Policy</h1>
        <p className="text-sm text-foreground/50 mb-10">Last updated: March 13, 2026</p>

        <p className="text-foreground/70 leading-relaxed mb-10">
          ClickReporter ("the Extension") is a browser extension that lets you send links from social media platforms to Discord webhooks with a single click. This policy explains what data the Extension collects, how it is used, and your rights over that data.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">1. Data We Collect</h2>
          <div className="rounded-2xl border border-foreground/10 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/10 bg-foreground/5">
                  <th className="text-left px-5 py-3 font-semibold text-foreground/70">Data</th>
                  <th className="text-left px-5 py-3 font-semibold text-foreground/70">Why</th>
                  <th className="text-left px-5 py-3 font-semibold text-foreground/70">Where it is stored</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    data: "Discord user ID, display name, and avatar URL",
                    why: "Personalises messages sent to your webhooks (your name and avatar appear on Discord messages)",
                    where: "Locally in your browser via chrome.storage.sync",
                  },
                  {
                    data: "Discord OAuth access token",
                    why: "Authenticates with the Discord API to retrieve your profile",
                    where: "Locally in your browser via chrome.storage.sync",
                  },
                  {
                    data: "Webhook URLs and labels you add",
                    why: "Required to send links to Discord on your behalf",
                    where: "Locally in your browser via chrome.storage.sync",
                  },
                  {
                    data: "Pro license key and activation instance ID",
                    why: "Validates your Pro subscription",
                    where: "Locally in your browser via chrome.storage.sync",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-foreground/2"}>
                    <td className="px-5 py-4 align-top text-foreground/80">{row.data}</td>
                    <td className="px-5 py-4 align-top text-foreground/60 leading-relaxed">{row.why}</td>
                    <td className="px-5 py-4 align-top text-foreground/60">
                      <code className="text-xs bg-foreground/10 px-1.5 py-0.5 rounded">chrome.storage.sync</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed">
            <strong className="text-foreground">We do not collect:</strong> browsing history, page content, post text or comments, usage analytics, crash reports, or any other personal information beyond what is listed above.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">2. How Data Is Used</h2>
          <ul className="flex flex-col gap-3 text-sm text-foreground/70 leading-relaxed list-none">
            <li><strong className="text-foreground">Sending links to Discord</strong> – When you click "Send to Discord", the URL of the current page (and any optional message you type) is posted to the webhook(s) you have configured. No other page data is collected or transmitted.</li>
            <li><strong className="text-foreground">Discord account display</strong> – Your Discord username and avatar are attached to outgoing webhook messages so messages appear as coming from you rather than a generic bot.</li>
            <li><strong className="text-foreground">License validation</strong> – Your license key is sent to Lemon Squeezy approximately once every 24 hours to verify your Pro subscription status.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">3. Third-Party Services</h2>
          <p className="text-sm text-foreground/70 leading-relaxed mb-4">The Extension communicates with the following external services:</p>
          <ul className="flex flex-col gap-4 text-sm text-foreground/70 leading-relaxed list-none">
            <li>
              <strong className="text-foreground">Discord</strong>{" "}
              (<a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Privacy Policy</a>) –
              Used for OAuth authentication and to deliver webhook messages. Only the URL you choose to share (and your optional comment) is sent to Discord. Discord's own privacy policy governs how they handle data received via webhooks.
            </li>
            <li>
              <strong className="text-foreground">Lemon Squeezy</strong>{" "}
              (<a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Privacy Policy</a>) –
              Used to activate and validate Pro licenses. Your license key and a locally-generated instance identifier are shared with Lemon Squeezy for this purpose.
            </li>
          </ul>
          <p className="text-sm text-foreground/70 leading-relaxed mt-4">No other third-party services receive your data.</p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">4. Data Storage and Security</h2>
          <p className="text-sm text-foreground/70 leading-relaxed mb-4">
            All data collected by the Extension is stored in your browser's{" "}
            <code className="text-xs bg-foreground/10 px-1.5 py-0.5 rounded">chrome.storage.sync</code>{" "}
            (or equivalent) storage. This means:
          </p>
          <ul className="flex flex-col gap-3 text-sm text-foreground/70 leading-relaxed list-none">
            <li>Data is stored locally on your device and may be synced across your own browser sessions if you are signed into your browser account.</li>
            <li>Data is <strong className="text-foreground">never uploaded to our servers</strong> – we do not operate any backend service.</li>
            <li>Your Discord OAuth access token is stored only on your device and is used solely to fetch your Discord profile. It is never shared with any party other than Discord.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">5. Your Rights and Controls</h2>
          <ul className="flex flex-col gap-3 text-sm text-foreground/70 leading-relaxed list-none">
            <li><strong className="text-foreground">Disconnect Discord account</strong> – You can remove your saved Discord credentials at any time from the Extension settings.</li>
            <li><strong className="text-foreground">Remove webhooks</strong> – You can delete individual webhooks or groups from the Extension settings at any time.</li>
            <li><strong className="text-foreground">Deactivate Pro license</strong> – You can deactivate your license from the Extension settings, which removes the license data from your browser and notifies Lemon Squeezy.</li>
            <li><strong className="text-foreground">Uninstall</strong> – Uninstalling the Extension permanently removes all locally stored data from your browser.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">6. Children's Privacy</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            The Extension is not directed at children under the age of 13. We do not knowingly collect personal information from children.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">7. Changes to This Policy</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            If this policy changes materially, the "Last updated" date at the top of this page will be revised. Continued use of the Extension after changes take effect constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">8. Contact</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            If you have questions about this privacy policy, reach out to{" "}
            <a href="mailto:business@thomascampbell.dev" className="text-blue-500 hover:underline">business@thomascampbell.dev</a>.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-foreground/10 mt-8 py-8 px-8 text-center text-xs text-foreground/40">
        Built by{" "}
        <Link href="/" className="underline hover:text-foreground/70 transition-colors">
          Thomas Campbell
        </Link>
      </footer>

    </div>
  )
}
