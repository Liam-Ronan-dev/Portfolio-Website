import Image from 'next/image';
import React from 'react';
import { FaCode } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

interface Tag {
  name: string;
  image: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly Tag[];
  imageSrc: string;
  link: string;
  code: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageSrc,
  link,
  code,
}) => {
  return (
    <div className="text-white border border-white p-8 rounded-xl drop-shadow-2xl mb-16 mt-12 sm:flex sm:items-center mx-auto max-w-6xl hover:bg-[#111111] transition duration-700 ease-in-out hover:scale-105">

  <div className="sm:order-2 sm:ml-6 mb-4 sm:mb-0 p-6">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image className='rounded-xl' src={imageSrc} alt={`Project ${title}`} width={800} height={800} />
    </a>
  </div>

  <div className="sm:order-1 sm:text-left text-center p-6">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="mb-4 tracking-wider text-lg">{description}</p>

    <div className="flex flex-wrap gap-6 sm:items-center pt-4 pb-6 mb-4 text-white">
      {tags.map((tag, index) => (
        <Image className='hover:scale-125 transition duration-300 ease-in-out' key={index} src={tag.image} alt={tag.name} width={35} height={35} />
      ))}
    </div>

    <div className="flex flex-col sm:flex-row gap-8">
      {link && (
        <a
          href={link}
          className="text-slate-300 w-full sm:w-1/4 p-8 py-4 flex justify-center hover:scale-105 items-center transition duration-300 ease-in-out rounded-lg border border-1 border-[#ffffff] cursor-pointer hover:bg-[#111111] uppercase tracking-wider mb-4 sm:mb-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
          <div className='pl-2 text-xl'>
            <TbWorldWww />
          </div>
        </a>
      )}

      <a
        href={code}
        className="text-slate-300 w-full sm:w-1/4 p-8 py-4 flex justify-center hover:scale-105 items-center transition duration-300 ease-in-out rounded-lg border border-1 border-[#ffffff] cursor-pointer hover:bg-[#111111] uppercase tracking-wider"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code
        <div className='pl-2 text-xl'>
          <FaCode />
        </div>
        
      </a>
    </div>
  </div>
</div>

  );
};

export default ProjectCard;
