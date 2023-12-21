import Image from 'next/image'
import { Socials } from '@/constants';
import React from 'react'

const About = () => {
    return (
      <div className='text-center mt-80 mb-20'>
        <h2 className='text-slate-300 text-5xl pb-12 mb-5'>ABOUT ME</h2>
        <div className='flex justify-center text-slate-300 gap-10'>
          <div className='text-start px-6 max-w-4xl text-2xl leading-10 py-6'>
            <p>
              Hey! I'm Liam, a full-stack software engineer from Ireland. My passion lies in crafting end-to-end solutions that seamlessly blend front-end finesse with back-end robustness. As a dedicated full-stack developer, I relish the opportunity to bring ideas to life by architecting and implementing scalable web applications.
            </p>
            <div className='flex justify-evenly py-10'>
              {Socials.map((social) => (
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <Image
                        key={social.name}
                        src={social.src}
                        alt={social.name}
                        width={50}
                        height={50}
                    />
                </a>
              ))}
            </div>
          </div>
          <div>
            {/* Your main image without a link */}
            <Image className='rounded-lg' src='/about.jpeg' alt="Liam's picture" width={300} height={300} />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;