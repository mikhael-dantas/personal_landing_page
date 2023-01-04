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
        <>
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>

            <h2>Technologies:</h2>
            <ul>
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>
        </div>

        <Link href="/projects">
            Back to projects
        </Link>

        <Link href={`${project.url}`}>
            Go to project Github
        </Link>

        <h2 className="text-2xl font-bold">Related:</h2>
        <ul>
            {project.related.map((related) => (
                <li key={related}>
                    <Link href={`/projects/${related}`}>
                        {ProjectsList.find((project) => project.name === related)?.name}
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default ProjectId;