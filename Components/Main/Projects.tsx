
import React from 'react'
import ProjectCard from '../Sub/ProjectCard'
import { projectsData } from '@/constants/data'

const Projects = () => {
  return (
    <div id="projects">
        <h2 className='text-slate-200 text-5xl mb-3 text-center'>PROJECTS</h2>

       	<div className='flex justify-center mb-6'>
          <hr className='w-[100px]' />
        </div>

        <div>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <ProjectCard 
                  {...project}
                />
              </React.Fragment>              
            ))}
        </div>

    </div>
  )
}

export default Projects