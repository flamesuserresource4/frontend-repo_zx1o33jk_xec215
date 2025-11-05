import { Car, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-black">
            <Car className="size-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">justDriver</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how" className="text-sm text-white/80 hover:text-white transition">How it works</a>
          <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
          <a href="#cta" className="text-sm text-white/80 hover:text-white transition">Get started</a>
          <a href="#" className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">Try the quiz</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none">
          <Menu className="size-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="space-y-1 px-4 py-3 sm:px-6">
            <a href="#how" className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10">How it works</a>
            <a href="#features" className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10">Features</a>
            <a href="#cta" className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10">Get started</a>
            <a href="#" className="block rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90">Try the quiz</a>
          </div>
        </div>
      )}
    </header>
  );
}
