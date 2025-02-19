'use client';

/* Importing animation from Utils/Motion.ts */
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from '@/Utils/Motion';
/* Framer Motion is a popular and feature-rich animation library for React applications. */
import { motion } from 'framer-motion';

const HeroContent = () => {

	return (
		/* 'motion.div' is provided by the framer motion library to create animated div elements - 'motion' object is an import from framer-motion contains
    various components such as ('motion.div', 'motion.span', etc) to create
    animated versions of standard HTML elements */
		<div className='items-center text-center mt-96 mb-72'>
			<motion.div
				initial='hidden'
				animate='visible'
				className='items-center text-center text-[130px]'
			>
				<motion.div variants={slideInFromLeft(0.2)} className=''>
					<h1 className='text-slate-300 flex justify-center'>Liam</h1>
				</motion.div>
				<motion.div variants={slideInFromRight(0.2)} className='leading-10'>
					<h1 className='text-slate-300 flex justify-center'>Ronan</h1>
				</motion.div>
			</motion.div>
			<div className='icon-scroll'>
				<div className='scroll-indicator'></div>
			</div>
		</div>
	);
};

export default HeroContent;
