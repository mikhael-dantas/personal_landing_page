import { useRouter } from 'next/router';
import React from 'react';
import ProjectsList from '../../../lib/ProjectsList';
import NotFound from '../../404';
import Link from 'next/link';
// import { Container } from './styles';
const ProjectId: React.FC = () => {

    const { projectId } = useRouter().query;

    const project = ProjectsList.find((project) => project.id === projectId);

    if (!project) {
        return <NotFound />
    }

    return (
        <div className='font-semibold text-gray-200'>
            <h1 className="text-4xl font-semibold text-center mt-2 text-gray-900 dark:text-gray-200 mb-4">
                {project.name}
            </h1>
            <div className="
                mt-10 mx-auto
                max-w-[40rem]
                rounded-lg
                p-10
                bg-indigo-500
                shadow-[rgba(0,0,0,0.17)_0px_-23px_25px_0px_inset,rgba(0,0,0,0.15)_0px_-36px_30px_0px_inset,rgba(0,0,0,0.1)_0px_-79px_40px_0px_inset,rgba(0,0,0,0.06)_0px_2px_1px,rgba(0,0,0,0.09)_0px_4px_2px,rgba(0,0,0,0.09)_0px_8px_4px,rgba(0,0,0,0.09)_0px_16px_8px,rgba(0,0,0,0.09)_0px_32px_16px]
                dark:shadow-[rgba(255,255,255,0.17)_0px_-23px_25px_0px_inset,rgba(255,255,255,0.15)_0px_-36px_30px_0px_inset,rgba(255,255,255,0.1)_0px_-79px_40px_0px_inset,rgba(255,255,255,0.06)_0px_2px_1px,rgba(255,255,255,0.09)_0px_4px_2px,rgba(255,255,255,0.09)_0px_8px_4px,rgba(255,255,255,0.09)_0px_16px_8px,rgba(255,255,255,0.09)_0px_32px_16px]
            ">
                <div>
                    <div className="flex items-center justify-center">
                        <img src={project.image} alt={project.name} className='
                            max-h-[20rem] ml-4 mt-4 object-contain
                        '/>
                    </div>
                    <h2 className='
                        text-1xl mt-10
                    '>{project.description}</h2>

                    <h2
                        className='
                        text-2xl
                        mt-10
                        '
                    >Technologies used:</h2>
                    <ul>
                        {project.technologies.map((technology) => (
                            <li className='
                                first:mt-3'
                            key={technology}>- {technology}</li>
                        ))}
                    </ul>
                </div>

                {/* two buttons in inverse order when small screens */}
                <div className="mt-10 flex flex-col-reverse space-y-4 sm:flex-row sm:space-y-0 justify-between w-100 px-5 gap-8">
                    <Link href="/projects" className={`
                        text-white
                        bg-indigo-600
                        hover:bg-indigo-800
                        px-8
                        py-4
                        rounded-lg
                        shadow-[rgba(0,0,0,0.35)_0px_5px_15px,rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]
                    `}>
                        {'<-'} Back to projects
                    </Link>

                    <Link href={`${project.url}`} className={`
                        text-white
                        bg-indigo-600
                        hover:bg-indigo-800
                        px-8
                        py-4
                        rounded-lg
                        shadow-[rgba(0,0,0,0.35)_0px_5px_15px,rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]
                    `}
                    >
                        Go to project Github {'->'}
                    </Link>
                </div>
                <h2 className="text-2xl font-bold mt-10"
                style={ project.related.length === 0 ? {display: 'none'} : {}}
                >Related Applications:</h2>
                {project.related.map((related) => {
                        return (<Link key={related} href={`/projects/${related}`}>
                            <h2 className="
                            shadow-[rgba(0,0,0,0.35)_0px_5px_15px,rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]
                            w-100
                            min-h-[3rem]
                            flex items-center
                            px-5 py-3
                            mt-3
                            hover:bg-indigo-600
                            ">
                                {ProjectsList.find((project) => project.id === related)?.name}
                            </h2>
                        </Link>)
                })}
            </div>
        </div>
    )
}

export default ProjectId;