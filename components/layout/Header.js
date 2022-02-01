import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Router from 'next/router'

const MenuList = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
]

const Navbar = (props) => {
  const [clicked, setClicked] = useState(false)

  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <Link href={url}>
          <a href={url}>{title}</a>
        </Link>
      </li>
    )
  })

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <header className='font-Poppins'>
      <nav className='container flex items-center py-4 mt-4 sm:mt-12'>
        <div className='py-1'>
          <img src='./imgs/logo-bookmark.svg' />
        </div>
        <ul className='hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs'>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Contact</li>
          <button
            type='button'
            className='bg-bookmark-red text-white rounded-md px-7 py-3 uppercase'
          >
            Login
          </button>
        </ul>
        <div
          className='flex sm:hidden flex-1 justify-end'
          onClick={handleClick}
        >
          <i
            className={
              clicked ? 'text-2xl fas fa-times' : 'text-2xl fas fa-bars'
            }
          ></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
