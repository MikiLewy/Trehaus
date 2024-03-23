'use client';

import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { useState } from 'react';

import NavLink from '@/components/atoms/nav-link/nav-link';
import NavbarContactDetails from '@/components/atoms/navbar-contact-details/navbar-contact-details';
import { routes } from '@/constants/routes';

const ClientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <motion.button initial="hide" animate={isOpen ? 'show' : 'hide'} onClick={handleToggle} className="flex flex-col space-y-1 relative z-10">
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: 45,
              y: 6,
            },
          }}
          className="w-6 bg-black h-0.5 block"
        />
        <motion.span
          variants={{
            hide: {
              opacity: 1,
            },
            show: {
              opacity: 0,
            },
          }}
          className="w-6 bg-black h-0.5 block"
        />
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: -45,
              y: -6,
            },
          }}
          className="w-6 bg-black h-0.5 block"
        />
      </motion.button>
      <AnimatePresence>
        {isOpen ? (
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0.1,
            }}>
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: '100%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                  },
                },
                show: {
                  x: '0%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed top-0 left-0 right-0 bottom-0 w-full bg-white pt-20 flex flex-col justify-start">
              <motion.ul
                className="flex flex-col gap-6 px-4 mb-10"
                variants={{
                  hide: {
                    opacity: 0,
                  },
                  show: {
                    opacity: 1,
                  },
                }}>
                {routes.map(({ key, href, title }) => (
                  <NavLink title={title} key={key} href={href} />
                ))}
              </motion.ul>
              <div className=" mt-auto py-5 bg-gray-100 w-full">
                <NavbarContactDetails />
              </div>
            </motion.div>
          </MotionConfig>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ClientNavbar;
