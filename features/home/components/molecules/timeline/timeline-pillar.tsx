'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const TimelinePillar = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'center'],
  });

  return (
    <div className="relative h-full" ref={ref}>
      <motion.div
        className="bg-primary relative h-full top-0 z-10 origin-top w-2 rounded-lg overflow-hidden scale-0"
        style={{ scaleY: scrollYProgress }}
      />
      <div className="w-2 h-full absolute top-0  origin-top scale-y-100 bg-gray-400 rounded-lg overflow-hidden" />
    </div>
  );
};

export default TimelinePillar;
