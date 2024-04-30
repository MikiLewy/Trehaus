'use client';

import { motion, Variants } from 'framer-motion';
import { CSSProperties } from 'react';

interface Props {
  img: string;
  title: string;
  description: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: -20,
    opacity: 0.1,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TimelineCard = ({ description, img, title }: Props) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-2  justify-between items-start overflow-hidden rounded-lg bg-white"
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.5 }}>
      <div
        style={{ '--image-url': `url('${img}');` } as CSSProperties}
        className={`bg-[image:var(--image-url)] order-1 bg-cover bg-right bg-no-repeat min-h-32 w-full h-full basis-2/4 flex-1`}
      />
      <div className="flex flex-col gap-2 basis-2/4 py-6 px-4 xl:py-8 lg:px-8">
        <h4 className="text-base md:text-xl xl:text-2xl font-semibold">
          {title}
        </h4>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
