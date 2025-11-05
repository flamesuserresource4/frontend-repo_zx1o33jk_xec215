import { Search, Car, Shield } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Tell us your vibe',
    desc: 'Answer a few quick questions about your lifestyle, commute, and budget.'
  },
  {
    icon: Car,
    title: 'See smart matches',
    desc: 'We surface cars that match your needs with transparent ratings and pros/cons.'
  },
  {
    icon: Shield,
    title: 'Buy with confidence',
    desc: 'Guided checklists and expert tips so you feel great about your decision.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="how" className="relative z-10 bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How it works</h2>
          <p className="mt-3 text-base text-white/70">
            A simple flow to get you from browsing to behind the wheel.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-3 ring-1 ring-inset ring-white/10">
                <f.icon className="size-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
