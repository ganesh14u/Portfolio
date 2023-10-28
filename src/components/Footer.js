import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg
    '>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserverd</span>
            <div className='flex items-center'>
            Build with <span className='text-primary text-2xl px-1'>&#9825;</span> 
            by&nbsp;<Link href="https://ganesh-portfolio.vercel.app" className='underline
            underline-offset-2
            '>Ganesh</Link>
            </div>
            <Link href="https://ganesh-portfolio.vercel.app" target={"_blank"} className='underline
            underline-offset-2
            '>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
