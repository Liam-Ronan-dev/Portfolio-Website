import React from "react";

const Navbar = () => {
	return (
            <div className="w-full h-[100px] text-sm font-semibold fixed top-0 backdrop-blur-sm z-50">
                <div className="w-full h-full flex justify-center">

                    <div className="w-[500px] h-full flex items-center justify-center py-16 px-4">
                        <div
                         className="flex items-center justify-between w-full h-auto border border-1 border-[#ffffff] px-[25px] p-[10px] rounded-lg text-slate-200"
                         >
                            <div className="hover:bg-[#111111] transition duration-700 ease-in-out hover:scale-110">
                                <a href="#hero">
                                    Home
                                </a>
                            </div>

                            <div className="hover:bg-[#111111] transition duration-700 ease-in-out hover:scale-110">
                                <a href="#about" className="cursor-pointer">
                                    About
                                </a>
                            </div>

                            <div className="hover:bg-[#111111] transition duration-700 ease-in-out hover:scale-110">
                                <a href="#skills" className="cursor-pointer">
                                    Skills
                                </a>
                            </div>

                            <div className="hover:bg-[#111111] transition duration-700 ease-in-out hover:scale-110">
                                <a href="#projects" className="cursor-pointer">
                                    Projects
                                </a>
                            </div>
                            
                          
                        </div>
                    </div>
                </div>
            </div>
	);
};

export default Navbar;
