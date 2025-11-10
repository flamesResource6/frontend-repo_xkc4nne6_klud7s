import { motion } from 'framer-motion'
import TruckScene from './TruckScene'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Top subtle grid/texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background:
              'radial-gradient(1000px 600px at 20% 0%, rgba(255, 189, 74, 0.18), transparent 60%), radial-gradient(1200px 600px at 90% 10%, rgba(255, 189, 74, 0.12), transparent 65%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-0 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 mb-6">
              <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs tracking-wider text-amber-300/90">Since 1998 • Nationwide Delivery</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Precision Metal Fabrication & Reliable Supply
            </h1>
            <p className="mt-5 text-lg md:text-xl text-zinc-300 max-w-xl">
              Sandeep Metal Works delivers cold rolled steel coils and custom metal solutions with exacting quality, on schedule—every time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 shadow-[0_0_40px_rgba(255,193,77,0.25)] transition-colors"
              >
                Get a Fast Quote
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center rounded-md border border-amber-400/30 bg-white/5 hover:bg-white/10 text-amber-300 px-6 py-3"
              >
                View Product Catalog
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-emerald-400" />
                <span>ISO-grade QA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-emerald-400" />
                <span>Pan-India Logistics</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-7 relative">
            <div className="aspect-[16/9] md:aspect-[20/9] rounded-xl border border-white/5 overflow-hidden shadow-2xl">
              <TruckScene />
            </div>
          </div>
        </div>

        {/* Bottom gradient to ground the hero */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0b] to-transparent" />
      </section>

      {/* Trust bar */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {["Automotive", "Infrastructure", "Machinery", "Fabricators"].map((t) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-lg py-4 text-zinc-300">
              {t}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
