/* eslint-disable react/prop-types */

import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100%",
      scale: 0.8,
      rotate: -45,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      scale: 0.8,
      rotate: 45,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence wait>
      <motion.div
        key={window.location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
