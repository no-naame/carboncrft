import { motion } from 'framer-motion';
import React from 'react';

interface TextEffectProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  per?: 'char' | 'word';
  delay?: number;
  className?: string;
  preset?: 'fade-in-blur' | 'slide';
  variants?: {
    container: any;
    item: any;
  };
}

export function TextEffect({
  children,
  as: Component = 'div',
  per = 'char',
  delay = 0,
  className = '',
  preset,
  variants: customVariants,
}: TextEffectProps) {
  const items = per === 'char' ? children.split('') : children.split(' ');

  const presets = {
    'fade-in-blur': {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05, delayChildren: delay },
        },
      },
      item: {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: {
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 0.5 },
        },
      },
    },
    'slide': {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: delay },
        },
      },
      item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] },
        },
      },
    },
  };

  const variants = customVariants || (preset ? presets[preset] : presets['fade-in-blur']);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants.container}
      className={className}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={variants.item}
          style={{ display: 'inline-block' }}
        >
          {item}
          {per === 'char' ? '' : '\u00A0'}
        </motion.span>
      ))}
    </motion.div>
  );
}