import Image from 'next/image'
import Link from 'next/link'
import Signature from '@/components/Signature'
import { linkData } from '@/data/links'
import NowPlaying from '@/components/now-playing'

export default function Home() {
    return (
        <main className="flex flex-col mx-auto max-w-2xl gap-16 px-8">
            <Introduction />
            <AboutMe />
            <Contacts />
            <Posts />
            <Signature />
            <NowPlaying />
        </main>
    )
}

function Introduction() {
    return (
        <header className="flex flex-row items-center gap-4">
            <div className="relative h-12 w-12">
                <Image
                    alt="logo"
                    className="rounded-full"
                    fill={true}
                    src="https://avatars.githubusercontent.com/u/86755705"
                />
            </div>
            <div className="flex flex-col">
                <h1 className="text-gray-800 font-semibold">Victor Lee</h1>
                <p className="text-gray-400">Software Engineer 🧑‍💻</p>
            </div>
        </header>
    )
}

function AboutMe() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-gray-500">About me</p>
            <div className="flex flex-col text-neutral-800 gap-4">
                <p>{`Hi! I'm Victor. 🌿`}</p>
                <p>
                    {`I'm currently studying Computer Science + Mathematics @ UC. Currently working on a few web development  + machine learning projects.`}
                </p>
                <p>{`Want to collaborate or connect? Feel free to use the links below! :D`}</p>
            </div>
        </div>
    )
}

function Contacts() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-gray-500">Contacts</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-neutral-900 ">
                <a
                    className="text-neutral-700 hover:text-neutral-300 underline underline-offset-4 decoration-dotted transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkData.email}
                >
                    Email
                </a>
                <a
                    className="text-neutral-700 hover:text-neutral-300 underline underline-offset-4 decoration-dotted transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkData.discord}
                >
                    Discord
                </a>
                <a
                    className="text-neutral-700 hover:text-neutral-300 underline underline-offset-4 decoration-dotted transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkData.github}
                >
                    Github
                </a>
            </div>
        </div>
    )
}
function Posts() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-gray-500">Recent Posts</p>
        </div>
    )
}
