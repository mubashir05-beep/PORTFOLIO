// Import the necessary modules
'use client'
import NextNProgress from 'nextjs-progressbar';
import React from 'react'

const NextProgress = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div>
        <NextNProgress color="#000000" options={{ showSpinner: false }} />
        {children}
    </div>
  )
}

export default NextProgress
