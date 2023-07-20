'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { StateContextProvider } from '../../context/stateContext';


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContextProvider>
          <div className="container">
            {children}
          </div>
        </StateContextProvider>
      </body>
     
    </html>
  )
}
