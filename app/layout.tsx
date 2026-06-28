import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Resume Builder — Craft Your Professional Story',
  description: 'Build a stunning, professional resume in minutes. Live preview, easy editing, and instant print/download — all in one place.',
  keywords: ['resume builder', 'CV maker', 'professional resume', 'job application'],
  openGraph: {
    title: 'Resume Builder — Craft Your Professional Story',
    description: 'Build a stunning, professional resume in minutes with live preview and instant print.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
