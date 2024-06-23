'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Minus } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Props {
  title: string;
  description: string;
  data: {
    id: number;
    title: string;
    value: boolean;
  }[];
}

const AccordionItem = ({ title, description, data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex-1">
      <div className="flex flex-col gap-2">
        <div
          className="flex flex-row items-center gap-2 justify-between py-2"
          onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}>
          <div className="flex flex-col">
            <h4 className="w-full text-lg font-medium lg:text-2xl">{title}</h4>
            <p className="text-sm lg:text-base">{description}zł</p>
          </div>
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
            <ChevronDown size={24} className="min-w-max" />
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
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2">
              {data?.map((row, index) => (
                <div
                  key={row.id}
                  className={`flex items-center justify-between py-2 pl-2 pr-4 gap-2 mb-2 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
                  <p className="text-sm">{row.title}</p>
                  {row.value ? (
                    <CheckCircle2 size={22} className="min-w-max" />
                  ) : (
                    <Minus size={22} className="min-w-max" />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full my-2 h-px bg-gray-200" />
    </div>
  );
};

export default AccordionItem;
