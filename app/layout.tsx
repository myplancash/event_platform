import type { Metadata } from 'next'  
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  //css variable for this font
  variable: '--font-poppins' 
})

export const metadata: Metadata = { 
  title: {
    template: '%s | Evently',
    default: 'Evently',
  },
  description: 'Evently is a platform for event management',
  icons: [],
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
