'use client';

import { useScroll, motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
}

const TimelineTitle = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'center'],
  });

  return (
    <motion.h3
      ref={ref}
      className="text-5xl sm:text-6xl font-semibold xl:text-7xl"
      style={{ opacity: scrollYProgress }}>
      {children}
    </motion.h3>
  );
};

export default TimelineTitle;
