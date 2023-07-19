import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to my portfolio showcasing a collection of dynamic and cutting-edge web applications built with React and Next.js! As a dedicated and skilled React/Next developer, I thrive on crafting seamless user experiences that leave a lasting impact on visitors. Through this portfolio, I am delighted to present a range of projects that illustrate my expertise in front-end development and highlight my passion for creating interactive and responsive web solutions. With an ardent focus on the latest trends and best practices in web development, I continually push the boundaries of what\'s possible with React and Next.js. Thank you for visiting my portfolio, and I hope the projects showcased here inspire you as much as they have inspired me during their creation. If you have any questions or potential collaboration opportunities, please don\'t hesitate to get in touch. Let\'s build captivating web experiences together!',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
