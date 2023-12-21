import {
	Backend_skill,
	Frontend_skill,
	Full_stack,
	Other_skill,
} from "@/constants/data";
import React from "react";
import SkillsData from "../Sub/SkillsData";

const Skills = () => {
	return (
		<section
			id="skills"
			className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 mt-40"
			style={{ transform: "scale(0.9)" }}
		>
			<h2 className="text-slate-200 text-5xl mb-3">SKILLS</h2>
			<div className="flex justify-center mb-6">
				<hr className="w-[100px]" />
			</div>
			<div className="flex flex-row justify-around flex-wrap gap-5 items-center">
				{Frontend_skill.map((image, index) => (
					<div className="hover:bg-[#111111] p-5 rounded-lg hover:scale-125 transition duration-700 ease-in-out items-center pt-4">
						<SkillsData
							key={index}
							src={image.Image}
							width={image.width}
							height={image.height}
							index={index}
						/>
					</div>
				))}
			</div>
			<div className="flex flex-row justify-around flex-wrap mt-8 gap-5 items-center">
				{Backend_skill.map((image, index) => (
					<div className="hover:bg-[#111111] p-5 rounded-lg hover:scale-125 transition duration-700 ease-in-out items-center pt-4">
						<SkillsData
							key={index}
							src={image.Image}
							width={image.width}
							height={image.height}
							index={index}
						/>
					</div>
				))}
			</div>
			<div className="flex flex-row justify-around flex-wrap mt-8 gap-5 items-center">
				{Full_stack.map((image, index) => (
					<div className="hover:bg-[#111111] p-5 rounded-lg hover:scale-125 transition duration-700 ease-in-out items-center pt-4">
						<SkillsData
							key={index}
							src={image.Image}
							width={image.width}
							height={image.height}
							index={index}
						/>
					</div>
				))}
			</div>
			<div className="flex flex-row justify-around flex-wrap mt-8 gap-5 items-center">
				{Other_skill.map((image, index) => (
					<div className="hover:bg-[#111111] p-5 rounded-lg hover:scale-125 transition duration-700 ease-in-out items-center pt-4">
						<SkillsData
							key={index}
							src={image.Image}
							width={image.width}
							height={image.height}
							index={index}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
