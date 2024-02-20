import React from 'react'
import Links from './Links'

export default function Footer() {
    return (
        <footer className="flex flex-col mx-auto max-w-2xl mt-8 pt-8 text-sm border-gray-400">
            <Links />
            <p className="flex flex-col mt-4 mb-8 items-center text-gray-400 font-light">
                <span>{new Date().getFullYear()} © Victor Lee.</span>
                <span>
                    Website built with Next.js, Tailwind, and Vercel. {}
                    <a
                        href="https://github.com/VLee9124/vectorly-dev"
                        rel="noopener noreferrer"
                        target="_blank"
                        className=" underline hover:text-gray-300 decoration-dotted underline-offset-4"
                    >
                        View source.
                    </a>
                </span>
            </p>
        </footer>
    )
}
