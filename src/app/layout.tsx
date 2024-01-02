import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Victor Lee',
    description: 'Victor Lee - Software Engineer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} h-full w-full min-h-screen relative sm:my-24 my-16 motion-reduce:transform-none motion-reduce:transition-none`}
            >
                {children}
                <Footer />
            </body>
        </html>
    )
}
