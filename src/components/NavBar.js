import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { Router, useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import {motion} from "framer-motion";

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className = {`h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
        <nav>
              <CustomLink href="/" title="Home" className='mr-4'/>
              <CustomLink href="" title="About" className='mx-4'/>
              <CustomLink href="" title="Projects" className='mx-4'/>
              <CustomLink href="" title="Articles" className='ml-4'/>  
        </nav>
        
        <nav className="flex item-center justify-center flex-wrap">
        <motion.a href="https://x.com/SaiGaneshPalad2" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        > <TwitterIcon /> </motion.a> 
        <motion.a href="/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        > <GithubIcon /> </motion.a> 
        <motion.a href="https://www.linkedin.com/in/ganesh1436u" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        > <LinkedInIcon /> </motion.a> 
        <motion.a href="/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        > <PinterestIcon /> </motion.a> 
        <motion.a href="/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        > <DribbbleIcon /> </motion.a> 
        </nav>

        <div className='absolute left-[50%] top-2 transilate-x-[-50%]'>
        <Logo />
        </div>
        </header>
    )
}

export default NavBar
