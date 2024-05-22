'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';

import Typography from '@/components/atoms/typography/typography';
import { convertIndexToNumber } from '@/utils/convert-index-to-number';

interface Props {
  title: string;
  description: string;
  index: number;
  isLastItem: boolean;
}

const AccordionItem = ({ title, description, index, isLastItem }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <div
          className="flex flex-row items-center justify-between cursor-pointer "
          onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}>
          <h4 className="text-sm lg:text-base xl:text-lg text-gray-950/90">
            {convertIndexToNumber(index)}. {title}
          </h4>
          <motion.div
            animate={isOpen ? 'show' : 'hide'}
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 180,
              },
            }}>
            {isOpen ? (
              <MinusCircle size={24} className="min-w-max" />
            ) : (
              <PlusCircle size={24} className="min-w-max" />
            )}
          </motion.div>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3 }}>
              <Typography variant="p2" className="mt-2 text-secondary">
                {description}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isLastItem ? <div className="w-full bg-gray-200 h-px mt-4" /> : null}
    </div>
  );
};

export default AccordionItem;
