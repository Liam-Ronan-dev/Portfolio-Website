"use client";

/* Importing animation from Utils/Motion.ts */
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/Utils/Motion";

/* Framer Motion is a popular and feature-rich animation library for React applications. */
import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

import Image from "next/image";

const HeroContent = () => {
	return (
		/* 'motion.div' is provided by the framer motion library to create animated div elements - 'motion' object is an import from framer-motion contains
    various components such as ('motion.div', 'motion.span', etc) to create
    animated versions of standard HTML elements */
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
		>
			<div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
				<motion.div
					variants={slideInFromTop}
					className="Welcome-box py-[8px] px-[16px] border border-[#7042f8bb] opacity-[0.9]"
				>
                    <CodeBracketIcon className="text-[#ffffff] mr-[10px] h-8 w-8"/>
					<h1 className="Welcome-text text-[16px]">
						Full-Stack Software Engineer
					</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
                >
                    Creating Authentic
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Project Experiences </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    As a dedicated and enthusiastic full-stack software engineer, I create seamless web experiences with expertise in both front-end and back-end development.
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Learn More!
                </motion.a>
			</div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image 
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
		</motion.div>
	);
};

export default HeroContent;
