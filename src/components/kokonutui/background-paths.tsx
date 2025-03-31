

import { motion } from "framer-motion"


function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 10 * position} -${189 + i * 6}C-${
      380 - i * 10 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none ">
      <svg className="w-full h-full  text-blue-500" viewBox="0 0 696 316" fill="none">
        <defs>
          <linearGradient id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5aa9e6" />  {/* Light Blue Start */}
          <stop offset="100%" stopColor="#a065e6" /> {/* Soft Purple End */}
          </linearGradient>
        </defs>
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#gradientId)" 
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundPaths() {


  return (
    <div className="relative lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent py-10 lg:py-0">
      <div className="absolute inset-0 -mt-44 lg:mt-0">
        <FloatingPaths position={4} />
        <FloatingPaths position={-4} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold lg:mb-40 tracking-tighter">
          The Future of <span className="bg-shopify-gradient bg-clip-text text-gradient-text">Shopify</span><span className="bg-custom-gradient bg-clip-text text-gradient-text"> Search</span> Starts Here, <span className="text-[#BCBBC3]">Unlock Information Like Never Before.</span>
          </h1>


        </motion.div>
      </div>
    </div>
  )
}

