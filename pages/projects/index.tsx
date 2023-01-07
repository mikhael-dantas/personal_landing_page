import React from 'react';

import ProjectsList from '../../lib/ProjectsList';
import Link from 'next/link';
import Image from 'next/image';

const projects: React.FC = () => {

    return (
        <div>
            <h1 
            className="text-4xl font-semibold text-center mt-2 text-gray-900 dark:text-gray-200 mb-4"
            >Main Projects:</h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
                Here are some of my main applications that I have worked hard on.
            </p>
            <ul className="projects-list flex flex-col items-center max-w-[40rem]" style={{margin:'0 auto'}}>
                {ProjectsList.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`} 
                    className="
                    project-item
                    flex flex-col-reverse gap-4 sm:flex-row
                    m-4 rounded-lg w-[100%] 
                    bg-gradient-to-r from-indigo-500 to-purple-400 sm:to-transparent
                    transition duration-300 ease-in-out
                    hover:bg-gray-700 dark:hover:bg-gray-300
                    py-8 px-1 sm:px-5 sm:py-12 flex flex-row justify-between items-center
                    shadow-[rgba(0,0,0,0.4)_0px_2px_4px,_rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset]
                    dark:shadow-[rgba(255,255,255,0.4)_0px_2px_4px,_rgba(255,255,255,0.3)_0px_7px_13px_-3px,rgba(255,255,255,0.2)_0px_-3px_0px_inset]
                    "
                    // style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}
                    >
                        <div className="flex flex-col justify-space-between w-[70%]">
                            <div className="flex flex-row items-center justify-space-between">
                                <h1 className="text-xl font-semibold ml-1 text-gray-200">
                                    {project.name}
                                </h1>
                            </div>
                            <p className="text-gray-200 mt-3 font-semibold">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-row justify-end text-2xl text-gray-300 dark:text-gray-300 items-center">
                            <img src={project.image} alt={project.name} className='
                                h-[4rem] rounded- ml-4
                            '/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default projects;