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
        // image: 'https://media.discordapp.net/attachments/327238569569550338/1059593988623052921/logosemfundo.png',
        image: 'https://personal-site-gules-five.vercel.app/_next/image?url=%2Favatar.jpg&w=640&q=75',
        name: 'Personal Landing Page',
        description: 'My personal website to present my professional profile and featured projects',
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
        description: 'Simplified e-commerce GraphQL API made with all the best practices and technologies',
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
        image: 'https://camo.githubusercontent.com/e3d4b8e739a10d265a665ff8bb6443f69686c7eec66f0f67c494bc962f454d29/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3332373233383536393536393535303333382f313035393539333938393132323136363932352f6c6f676f2e706e67',
        name: 'E-Commerce Simplified Frontend',
        description: 'Minified e-commerce frontend that consumes the GraphQL API resources',
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
        image: 'https://cdn-icons-png.flaticon.com/512/4016/4016758.png',
        name: 'Tests Provider Front',
        description: 'A front-end to build specifications based on business model to provide a structured object of use cases and functional requirements',
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
        image: 'https://cdn3.vectorstock.com/i/1000x1000/26/17/script-logo-design-vector-31372617.jpg',
        name: 'Tests Provider Consumer Module',
        description: 'A module that takes the specifications provided by the front-end and generates the tests based on the business model',
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