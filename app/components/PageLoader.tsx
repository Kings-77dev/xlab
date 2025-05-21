// components/PageLoader.tsx
'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageLoader() {
  const [phase, setPhase] = useState<1|2|3>(1)

  useEffect(() => {
    // 0.8s → initials, 1.6s → done (unmount)
    const t1 = setTimeout(() => setPhase(2), 800)
    const t2 = setTimeout(() => setPhase(3), 1600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (phase === 3) return null

  const text = phase === 2 ? 'DBK' : 'Design by Kings'
  const letters = text.split('')

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } }
  }
  const letter = { hidden: { opacity: 0 }, visible: { opacity: 1 } }

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.3 } }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-primary"
          variants={container}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {letters.map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  )
}