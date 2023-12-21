import Image from "next/image";
import { Socials } from "@/constants/data";
import React from "react";
import Link from "next/link";

import { IoMdDownload } from "react-icons/io";

const About = () => {
	return (
		<div className="text-center mt-80 mb-20" id="about">
			<h2 className="text-slate-300 text-5xl mb-3">ABOUT ME</h2>

			<div className="flex justify-center mb-6">
				<hr className="w-[100px]" />
			</div>

			<div className="flex justify-center text-slate-300">
				<div className="text-center px-6 max-w-6xl text-2xl leading-10">
					<div className="flex justify-center py-6">
						{/* Your main image without a link */}
						<Image
							className="rounded-lg mb-6 border border-white hover:scale-105 transition duration-700 ease-in-out"
							src="/about.jpeg"
							alt="Liam's picture"
							width={300}
							height={300}
						/>
					</div>

					<p>
						Hey! I'm Liam, a full-stack software engineer from Ireland. My
						passion lies in crafting end-to-end solutions that seamlessly blend
						front-end finesse with back-end robustness. As a dedicated
						full-stack developer, I relish the opportunity to bring ideas to
						life by architecting and implementing scalable web applications.
					</p>

					<div className="flex justify-evenly py-10">
						{Socials.map((social) => (
							<div className="hover:bg-[#111111] p-2 rounded-lg hover:scale-125 transition duration-700 ease-in-out items-center pt-4">
								<a href={social.link} target="_blank" rel="noopener noreferrer">
									<Image
										key={social.name}
										src={social.src}
										alt={social.name}
										width={50}
										height={50}
									/>
								</a>
							</div>
						))}

						<a
							className="text-slate-300 w-1/4 pt-4 p-8 py-4 flex justify-center hover:scale-105 items-center transition duration-700 ease-in-out rounded-lg border border-1 border-[#ffffff] cursor-pointer hover:bg-[#111111]"
							href="/LiamRonanCV.pdf"
							download={true}
						>
							Download CV
							<IoMdDownload />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
