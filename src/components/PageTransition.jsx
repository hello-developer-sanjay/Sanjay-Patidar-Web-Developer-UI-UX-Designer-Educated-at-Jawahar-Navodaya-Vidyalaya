/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PuffLoader } from 'react-spinners';

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const pageVariants = {
    initial: {
      y: '100vh',
      rotateX: 60,
      rotateY: 45,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 2.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      y: '100vh',
      rotateX: -60,
      rotateY: -45,
      scale: 0.8,
      transition: {
        duration: 2.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  useEffect(() => {
    const handleExitComplete = () => {
      setIsLoading(true);
    };

    const handleAnimationComplete = () => {
      setIsLoading(false);
    };

    return () => {
      handleExitComplete();
      handleAnimationComplete();
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white', // Set background color as needed
            zIndex: 9999,
          }}
        >
          <PuffLoader color="#36D7B7" />
        </div>
      )}

      <AnimatePresence wait>
        <motion.div
          key={window.location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          onAnimationComplete={() => setIsLoading(false)}
          style={{
            overflow: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            perspective: '1200px',
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
