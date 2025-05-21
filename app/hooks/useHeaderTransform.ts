'use client';

import { useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Returns true once you've scrolled past `threshold` (0–1).
 */
export function useHeaderTransform(threshold = 0.15) {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setScrolled(v > threshold);
    });
    return unsubscribe;
  }, [scrollYProgress, threshold]);

  return scrolled;
}