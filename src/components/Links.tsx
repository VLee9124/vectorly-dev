import React from 'react'

import { linkData } from '@/data/links'

import { FaGithubAlt, FaDiscord, FaLinkedinIn, FaGit } from 'react-icons/fa'

const components: { [key: string]: any } = {
    github: FaGithubAlt,
    linkedin: FaLinkedinIn,
    discord: FaDiscord,
}

interface iconType {
    name: string
    url: string
}

function Icons({ name, url }: iconType) {
    if (
        !url ||
        (name === 'mail' &&
            !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(url))
    )
        return null

    const SocialSvg = components[name]
    return (
        <a
            className="text-neutral-600 hover:text-neutral-300 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            href={url}
        >
            <span className="sr-only">{name}</span>
            <SocialSvg />
        </a>
    )
}

export default function Links() {
    return (
        <div className="flex gap-x-4 justify-center text-3xl">
            <Icons name="github" url={linkData.github} />
            <Icons name="linkedin" url={linkData.linkedin} />
            <Icons name="discord" url={linkData.discord} />
        </div>
    )
}
