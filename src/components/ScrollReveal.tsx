import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ 
  children, 
  width = "100%", 
  delay = 0.2,
  direction = "up"
}: ScrollRevealProps) => {
  const getVariants = () => {
    const hidden = {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    };

    return {
      hidden,
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: "easeOut" as any,
        },
      },
    };
  };

  return (
    <div style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
