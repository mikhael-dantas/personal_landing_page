import React from 'react';

import ProjectsList from '../../lib/ProjectsList';

const projects: React.FC = () => {

    return (
        <div>
            <h1>Projects:</h1>
            <ul>
                {ProjectsList.map((project) => (
                    <li key={project.id}>
                        <a href={`/projects/${project.id}`}>{project.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default projects;