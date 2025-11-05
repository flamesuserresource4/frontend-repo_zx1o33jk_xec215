import { Rocket } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 opacity-60" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/70">
              <Rocket className="size-3" />
              <span>Smart car matching</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to find your perfect fit?
            </h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Our quiz takes under 2 minutes. Get personalized matches and expert guidance—no spam, no fluff.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a href="#" className="w-full sm:w-auto rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-black shadow-sm hover:bg-white/90">
                Start the fit quiz
              </a>
              <a href="#features" className="w-full sm:w-auto text-center text-sm font-semibold text-white/80 hover:text-white">
                Explore features
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} justDriver. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
