type Site = {
    url: string
    title: string
    name: string
    keywords: string[]
    titleTemplate: string
    description: string
    githubUsername: string
    favicons: IconDescriptor[]
}

const prodBaseURL = 'https://vectorly.dev'
const devBaseURL = 'http://localhost:3000'

const site: Site = {
    url: process.env.NODE_ENV === 'production' ? prodBaseURL : devBaseURL,
    title: 'Vectorly',
    name: 'Vectorly',
    keywords: ['VLee9124', 'Next.js', 'React', 'TypeScript', 'Node.js'],
    titleTemplate: '- Vectorly',
    description: 'Victor Lee - Software Engineer',
    githubUsername: 'VLee9124',
    favicons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/favicon-16x16.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/favicon-32x32.png',
        },
    ],
}

const fetcher = async <JSON>(
    input: string,
    init?: RequestInit
): Promise<JSON> => {
    const fetchURL =
        process.env.NODE_ENV === 'test' ? `${site.url}${input}` : input

    const res = await fetch(fetchURL, init)
    return res.json() as Promise<JSON>
}

export default fetcher
