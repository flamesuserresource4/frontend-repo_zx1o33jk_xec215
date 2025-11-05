import React from 'react';

export default function CTASection() {
  return (
    <section id="start" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,0.35),rgba(0,0,0,0))]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 flex flex-col items-start gap-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            Ready to discover your best match?
          </h3>
          <p className="text-white/70 max-w-2xl">
            Take the quick fit quiz and get a personalized shortlist with immersive 3D previews.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
              Start the quiz
            </a>
            <a href="#compare" className="inline-flex items-center rounded-md bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition">
              Explore comparisons
            </a>
          </div>
          <div className="mt-6 w-full border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} justDriver. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
