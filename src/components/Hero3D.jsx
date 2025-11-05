import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          Interactive 3D comparison
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
          Find your perfect ride
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
          justDriver asks a few simple questions and recommends the best cars for your lifestyle.
          Explore every detail in an immersive 3D view and compare models side by side.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#start" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
            Start your fit quiz
          </a>
          <a href="#compare" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/20 transition">
            Try the 3D demo
          </a>
        </div>
      </div>
    </section>
  );
}
