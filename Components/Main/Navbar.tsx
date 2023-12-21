import React from "react";
import { motion } from "framer-motion";

import { slideInFromTop } from "@/Utils/Motion";

const Navbar = () => {
	return (
            <div className="w-full h-[100px] text-sm font-semibold fixed top-0 backdrop-blur-sm z-50">
                <div className="w-full h-full flex justify-center">

                    <div className="w-[500px] h-full flex items-center justify-center py-16 px-4">
                        <div
                         className="flex items-center justify-between w-full h-auto border border-1 border-[#ffffff] bg-neutral-900 px-[25px] p-[10px] rounded-md text-slate-200"
                         >
                            <a href="#about-me" className="cursor-pointer">
                                Home
                            </a>
                            <a href="#projects" className="cursor-pointer">
                                About
                            </a>
                            <a href="#skills" className="cursor-pointer">
                                Skills
                            </a>
                            <a href="#contact" className="cursor-pointer">
                                Projects
                            </a>
                          
                        </div>
                    </div>
                </div>
            </div>
	);
};

export default Navbar;
