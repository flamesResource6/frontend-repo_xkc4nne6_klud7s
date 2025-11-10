import { motion } from 'framer-motion'

/*
  TruckScene
  - Cinematic low-angle SVG of a flatbed truck carrying cold rolled steel coils
  - Dark matte industrial background with subtle warm lighting
  - Slow left-to-right motion with gentle reflection shimmer on coils
*/
export default function TruckScene() {
  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Background: deep charcoal with warm vignette and faint beam */}
      <div className="absolute inset-0 bg-[#0b0b0c]" />
      <div
        className="absolute -inset-20 opacity-30"
        style={{
          background:
            'radial-gradient(1200px 500px at 60% 40%, rgba(255, 176, 46, 0.15), transparent 60%), radial-gradient(800px 400px at 20% 80%, rgba(255, 176, 46, 0.08), transparent 60%)',
        }}
      />
      {/* Ground plane subtle line */}
      <div className="absolute left-0 right-0 bottom-[12%] h-px bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      {/* Light beam for industrial feel */}
      <div
        className="absolute -right-40 top-10 w-[70%] h-[60%] rotate-[-8deg] opacity-[0.08]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255, 196, 78, 0.8), transparent)',
          filter: 'blur(24px)',
        }}
      />

      <div className="relative">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 600"
          className="w-full h-auto"
          initial={{ x: -300 }}
          animate={{ x: [ -300, 0, 150, 300 ] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          <defs>
            {/* Steel brushed gradient */}
            <linearGradient id="steel" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d9d9dc" />
              <stop offset="25%" stopColor="#bfc1c5" />
              <stop offset="50%" stopColor="#f2f3f5" />
              <stop offset="75%" stopColor="#b7b9bd" />
              <stop offset="100%" stopColor="#d9d9dc" />
            </linearGradient>
            {/* Animated highlight sweep for subtle reflection */}
            <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.35)">
                <animate attributeName="offset" values="0;1" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            {/* Truck body paint (industrial matte) */}
            <linearGradient id="cab" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1f1f22" />
              <stop offset="100%" stopColor="#101013" />
            </linearGradient>
            {/* Amber accent */}
            <linearGradient id="amber" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffcf66" />
              <stop offset="100%" stopColor="#e7a73a" />
            </linearGradient>
            {/* Tire gradient */}
            <linearGradient id="tire" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a2a2e" />
              <stop offset="100%" stopColor="#121215" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Ground shadow */}
          <ellipse cx="800" cy="520" rx="520" ry="40" fill="#000" opacity="0.35" filter="url(#softShadow)" />

          {/* Flatbed trailer */}
          <g transform="translate(250,350)">
            <rect x="0" y="0" width="900" height="34" rx="6" fill="#18181b" stroke="#2b2b31" strokeWidth="2" />
            <rect x="20" y="-24" width="860" height="24" fill="#202026" />
            {/* Straps */}
            <g>
              {Array.from({ length: 6 }).map((_, i) => (
                <rect key={i} x={80 + i * 140} y={-120} width="6" height="120" fill="#2a2a2f" />
              ))}
            </g>
          </g>

          {/* Coils */}
          <g transform="translate(300,240)">
            {[
              { x: 0 },
              { x: 180 },
              { x: 360 },
              { x: 540 },
              { x: 720 },
            ].map((c, idx) => (
              <g key={idx} transform={`translate(${c.x}, 0)`}>
                {/* Outer coil */}
                <ellipse cx="90" cy="100" rx="110" ry="80" fill="url(#steel)" />
                {/* Inner bore */}
                <ellipse cx="90" cy="100" rx="34" ry="26" fill="#2b2b30" />
                {/* Edge shading */}
                <ellipse cx="90" cy="100" rx="110" ry="80" fill="url(#shine)" opacity="0.25" />
                {/* Fine lines to suggest brushed finish */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <rect key={i} x={20 + i * 16} y={32} width="2" height="136" fill="rgba(255,255,255,0.04)" />
                ))}
                {/* Strap over coil */}
                <rect x="86" y="16" width="8" height="168" fill="#2a2a2f" />
              </g>
            ))}
          </g>

          {/* Cab silhouette */}
          <g transform="translate(160,270)">
            <rect x="0" y="58" width="120" height="18" rx="3" fill="#0f0f12" />
            <rect x="10" y="10" width="110" height="50" rx="6" fill="url(#cab)" stroke="#2a2a30" strokeWidth="2" />
            <rect x="16" y="16" width="60" height="36" rx="4" fill="#141419" />
            <rect x="82" y="22" width="8" height="8" rx="2" fill="url(#amber)" />
            <rect x="96" y="22" width="8" height="8" rx="2" fill="url(#amber)" />
            <path d="M130 0 L240 0 L260 40 L260 70 L130 70 Z" fill="url(#cab)" stroke="#2b2b30" strokeWidth="2" />
            <rect x="146" y="10" width="74" height="36" rx="4" fill="#1a1a20" />
            <rect x="130" y="70" width="130" height="24" fill="#15151a" />
            <rect x="130" y="70" width="130" height="4" fill="url(#amber)" opacity="0.8" />
          </g>

          {/* Wheels */}
          <g transform="translate(220,420)">
            {[
              { x: 0 },
              { x: 220 },
              { x: 560 },
              { x: 780 },
            ].map((w, i) => (
              <g key={i} transform={`translate(${w.x}, 0)`}>
                <circle cx="0" cy="0" r="46" fill="url(#tire)" />
                <circle cx="0" cy="0" r="26" fill="#2b2b31" />
                <circle cx="0" cy="0" r="8" fill="#8a8e96" />
              </g>
            ))}
          </g>
        </motion.svg>

        {/* Faint rolling fog near ground */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 bottom-[8%] h-24"
          initial={{ opacity: 0.08, x: -100 }}
          animate={{ opacity: 0.14, x: 100 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            background:
              'radial-gradient(40% 60% at 30% 50%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(35% 60% at 70% 50%, rgba(255,255,255,0.05), transparent 60%)',
            filter: 'blur(18px)',
          }}
        />
      </div>
    </div>
  )
}
