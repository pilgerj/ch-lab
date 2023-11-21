import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={GeistSans.className} lang="en">
      <body className="antialiased bg-black-950 text-black-50">
        {children}
      </body>
    </html>
  )
}
