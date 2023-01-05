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
                    project-item p-4 m-4 rounded-lg w-[100%] 
                    bg-gradient-to-r from-indigo-500
                    transition duration-300 ease-in-out
                    hover:bg-gray-700 dark:hover:bg-gray-300
                    py-8 px-5 flex flex-row justify-between items-center
                    "
                    >
                        <div className="flex flex-col justify-space-between">
                            <div className="flex flex-row items-center">
                                <img src={project.image} alt={project.name} className='
                                h-[3rem] shadow-md rounded-full
                                '/>
                                <h1 className="text-xl font-semibold ml-3">
                                    {project.name}
                                </h1>
                            </div>
                            <p className="text-gray-200 dark:text-gray-900 mt-3 font-semibold">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-row justify-end text-2xl text-gray-300 dark:text-gray-300">
                            {"->"}
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default projects;