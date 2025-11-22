import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FloraVision - Earth\'s Exhale',
  description: 'From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}

