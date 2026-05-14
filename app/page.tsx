export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Hero */}
        <section className="text-center mb-20">
          <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
            AI-Powered Hiring Intelligence
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Analyze GitHub Commits<br />Before the Interview
          </h1>
          <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
            Instantly surface commit patterns, code quality signals, and collaboration style from any candidate&apos;s GitHub history. Make smarter hiring decisions faster.
          </p>
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Analyzing — $19/mo
          </a>
          <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No credit card required to try.</p>
        </section>

        {/* Features strip */}
        <section className="grid grid-cols-1 gap-4 mb-20 sm:grid-cols-3">
          {[
            { title: 'Commit Patterns', desc: 'Frequency, consistency, and work-hour analysis across repos.' },
            { title: 'Code Quality', desc: 'Message clarity, diff size discipline, and refactor signals.' },
            { title: 'Collaboration', desc: 'PR reviews, co-author activity, and team contribution style.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
          <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
            <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
            <div className="text-5xl font-bold text-white mb-1">$19</div>
            <div className="text-[#8b949e] mb-6">per month</div>
            <ul className="text-left space-y-3 mb-8">
              {[
                'Unlimited candidate analyses',
                'Full GitHub commit history scan',
                'AI-generated hiring report',
                'Export to PDF or CSV',
                'Team seat sharing'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={checkoutUrl}
              className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
          <div className="space-y-6">
            <div className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">How does the GitHub analysis work?</h3>
              <p className="text-[#8b949e] text-sm">You enter a candidate&apos;s GitHub username. We fetch their public commit history and run it through our AI model to generate a structured hiring report covering code quality, consistency, and collaboration signals.</p>
            </div>
            <div className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">Is this legal and ethical to use in hiring?</h3>
              <p className="text-[#8b949e] text-sm">Yes. We only analyze publicly available GitHub data. We recommend using the report as one signal among many, not as a sole hiring criterion, in line with fair hiring practices.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-[#8b949e] text-sm">Absolutely. You can cancel from your billing portal at any time. You&apos;ll retain access until the end of your billing period with no additional charges.</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-[#8b949e] border-t border-[#30363d] pt-8">
          &copy; {new Date().getFullYear()} GitHub Commit Interview Analyzer. All rights reserved.
        </footer>
      </div>
    </main>
  )
}
