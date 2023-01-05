type ProjectsList = {
    id: string;
    image: string;
    name: string;
    description: string;
    url: string;
    related: string[];
    technologies: string[];
}[];
const GitHubProjectsList: ProjectsList = [
    {
        id: 'personal_landing_page',
        image: 'https://media.discordapp.net/attachments/327238569569550338/1059593988623052921/logosemfundo.png',
        name: 'Personal Landing Page',
        description: 'My personal landing page',
        url: 'https://www.github.com/mikhael-dantas/personal_landing_page',
        related: [],
        technologies: [
            'React',
            'TypeScript',
            'NextJS',
            'Styled Components',
            'Tailwindcss',
        ]
    },
    {
        id: 'e_commerce_simplified_api',
        image: 'https://media.discordapp.net/attachments/327238569569550338/1059593988623052921/logosemfundo.png',
        name: 'E-Commerce Simplified API',
        description: 'A simplified e-commerce API',
        url: 'https://www.github.com/mikhael-dantas/e_commerce_simplified_api',
        related: [
            'e_commerce_simplified_frontend',
            'tests_provider_front',
            'tests_provider_consumer_module'
        ],
        technologies: [
            'TypeScript',
            'NodeJS',
            'GraphQL',
            'Express',
            'Prisma',
            'PostgreSQL',
            'Redis',
            'Docker',
            'Jest',
            'Nginx',
        ]
    },
    {
        id: 'e_commerce_simplified_frontend',
        image: 'https://media.discordapp.net/attachments/327238569569550338/1059593988623052921/logosemfundo.png',
        name: 'E-Commerce Simplified Frontend',
        description: 'A simplified e-commerce frontend',
        url: 'https://www.github.com/mikhael-dantas/e_commerce_simplified_frontend',
        related: [
            'e_commerce_simplified_api',
            'tests_provider_front',
            'tests_provider_consumer_module'
        ],
        technologies: [
            'TypeScript',
            'React',
            'NextJS',
            'GraphQL',
            'Apollo',
            'Chakra UI',
        ]
    },
    {
        id: 'tests_provider_front',
        image: 'https://media.discordapp.net/attachments/327238569569550338/1059593988623052921/logosemfundo.png',
        name: 'Tests Provider Front',
        description: 'A front-end for tests provider',
        url: 'https://www.github.com/mikhael-dantas/tests_provider_front',
        related: [
            'tests_provider_consumer_module',
        ],
        technologies: [
            'TypeScript',
            'React',
            'NextJS',
            'Chakra UI',
        ]
    },
    {
        id: 'tests_provider_consumer_module',
        image: 'https://media.discordapp.net/attachments/327238569569550338/1059593988623052921/logosemfundo.png',
        name: 'Tests Provider Consumer Module',
        description: 'A module for tests provider',
        url: 'https://www.github.com/mikhael-dantas/tests_provider_consumer_module',
        related: [
            'tests_provider_front',
        ],
        technologies: [
            'TypeScript',
            'NodeJS',
        ]
    },
]

export default GitHubProjectsList;