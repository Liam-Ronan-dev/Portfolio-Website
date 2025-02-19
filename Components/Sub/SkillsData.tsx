'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
//This library is commonly used to track whether a particular element is in the viewport or not.
import { useInView } from 'react-intersection-observer';

// This interface is likely intended to be used as the type definition for the props that a React component should receive - blueprint for what an object should look like
interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillsData = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageTypes = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageTypes}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

export default SkillsData;
