"use client";

/* Importing animation from Utils/Motion.ts */
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/Utils/Motion";

/* Framer Motion is a popular and feature-rich animation library for React applications. */
import { motion } from "framer-motion";


import Image from "next/image";

const HeroContent = () => {
	return (
		/* 'motion.div' is provided by the framer motion library to create animated div elements - 'motion' object is an import from framer-motion contains
    various components such as ('motion.div', 'motion.span', etc) to create
    animated versions of standard HTML elements */
		<motion.div
			initial="hidden"
			animate="visible"
			className="items-center text-center mt-80 mb-40 text-[130px] px-5"
		>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className=""
            >
               <h1 className="text-slate-300 flex justify-center">Liam</h1>
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.5)}
                className="leading-10"
            >
               <h1 className="text-slate-300 flex justify-center">Ronan</h1>
            </motion.div>
		</motion.div>
	);
};

export default HeroContent;
