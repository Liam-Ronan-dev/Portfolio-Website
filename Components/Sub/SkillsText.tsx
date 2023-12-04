"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/Utils/Motion'
import { CodeBracketIcon } from '@heroicons/react/24/solid'


const SkillsText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[16px] border border-[#7042f8bb] opacity-[0.9]"
    	>
            <CodeBracketIcon className="text-[#ffffff] mr-[10px] h-8 w-8"/>
            <h1 className="Welcome-text text-[16px]">
                Think better with Next JS 13
            </h1>
        </motion.div>

        <motion.div
            variants={slideInFromLeft(0.5)}
            className='text-[30px] text-white font-medium mt-[20px] text-center mb-[15px]'
        >
            Making Apps with modern Technologies
        </motion.div>

        <motion.div
            variants={slideInFromRight(0.5)}
            className='font-medium text-[20px] text-white mb-10 mt-[10px] text-center'
        >
            Never miss a Task Deadline
        </motion.div>
    </div>
  )
}

export default SkillsText