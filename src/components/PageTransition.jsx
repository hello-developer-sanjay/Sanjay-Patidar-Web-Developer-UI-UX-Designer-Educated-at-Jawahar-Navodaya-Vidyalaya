/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PuffLoader } from 'react-spinners';

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef(null);

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
      <AnimatePresence wait>
        {isLoading && (
          <motion.div
            key="spinner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              zIndex: 9999,
            }}
          >
            <PuffLoader color="#36D7B7" />
          </motion.div>
        )}

        <motion.div
          key={window.location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationComplete={() => setIsLoading(false)}
          style={{
            overflow: 'hidden',
            position: 'absolute',
            width: '100%',
            height: 'auto',
            perspective: '1200px',
          }}
        >
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, height: contentRef.current ? contentRef.current.scrollHeight : 'auto' }}
            exit={{ opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
