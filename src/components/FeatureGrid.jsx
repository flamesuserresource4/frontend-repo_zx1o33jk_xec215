import React from 'react';
import { Search, Sparkles, Cube } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Answer a few questions',
    desc: 'Tell us how you drive, your budget, and what matters most. It takes less than a minute.'
  },
  {
    icon: Sparkles,
    title: 'Smart recommendations',
    desc: 'We match you with cars that fit your needs using data-driven scoring and reviews.'
  },
  {
    icon: Cube,
    title: '3D interactive comparison',
    desc: 'Spin, zoom, and explore interiors. Compare models visually—down to the details.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="how" className="relative bg-gradient-to-b from-black to-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">How justDriver works</h2>
        <p className="mt-2 text-white/70 max-w-2xl">A streamlined journey from questions to keys—built for clarity and confidence.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gradient-to-tr from-red-600 to-rose-400 p-2.5 text-white shadow-lg shadow-red-900/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-white font-medium text-lg">{title}</h3>
              </div>
              <p className="mt-4 text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
