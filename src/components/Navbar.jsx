import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-red-600 to-rose-400 shadow-lg shadow-red-900/40" />
          <span className="text-white font-semibold tracking-tight text-lg">justDriver</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#how" className="text-white/80 hover:text-white transition-colors">How it works</a>
          <a href="#compare" className="text-white/80 hover:text-white transition-colors">Compare</a>
          <a href="#start" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
