'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

import { Image as ImageInterface } from '@/types/interfaces/image';

interface Props {
  img: ImageInterface;
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
      className="flex flex-col sm:flex-row gap-2 w-full min-h-52 md:min-h-60  justify-between items-start overflow-hidden rounded-lg bg-white"
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.7 }}>
      <div className="relative order-1 min-h-32 w-full h-full basis-2/5 flex-1">
        <Image
          src={img.src}
          alt={img.alt}
          loading="lazy"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 basis-3/5 py-6 px-4 xl:py-8 lg:px-8">
        <h4 className="text-base md:text-xl xl:text-2xl font-semibold">
          {title}
        </h4>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
