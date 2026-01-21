import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CMC Console - Civilizational Memory Codex',
  description: 'Governance console for managing, validating, and deploying civilizational memory files',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

