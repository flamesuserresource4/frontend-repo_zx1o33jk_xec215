import Spline from '@splinetool/react-spline';
import ErrorBoundary from './ErrorBoundary.jsx';

export default function Hero3D() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black pt-20">
      {/* Interactive 3D scene */}
      <div className="absolute inset-0">
        <ErrorBoundary
          fallback={
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-black to-zinc-900">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-white">Interactive preview unavailable</h2>
                <p className="mt-2 text-sm text-white/70">Please refresh or try again later.</p>
              </div>
            </div>
          }
        >
          <Spline
            scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </ErrorBoundary>
      </div>

      {/* Gradient overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(16,185,129,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find your perfect car. Just drive.
          </h1>
          <p className="mt-6 text-lg leading-7 text-white/80">
            Take a quick fit quiz and we’ll match you with cars that fit your lifestyle, budget, and vibe.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <a
              href="#cta"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-white/90"
            >
              Start the fit quiz
            </a>
            <a href="#how" className="text-sm font-semibold leading-6 text-white/80 hover:text-white">
              How it works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
