import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub Commit Interview Analyzer',
  description: 'Analyze candidates\' GitHub commits for technical hiring insights. Deep analysis of commit patterns, code quality, and collaboration style.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9c1b444d-f048-4154-a4c4-9931fe630d65"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
