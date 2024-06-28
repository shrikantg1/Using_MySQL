import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=" z-10 py-5 shadow-xl sticky">
      {/* desktop */}
    <div className="container mx-auto px-4">
      <div className="relative flex items-center justify-between">
        <Link className="inline-block" to="/">
          <img className="h-10" src="https://media.istockphoto.com/id/1529767331/vector/ai-symbol.jpg?s=1024x1024&w=is&k=20&c=WYXWd8_GxyXYA2lYbq-8M-cUjZ6wO2IWSpjalfLuZEE=" alt />
        </Link>
        <div className="flex items-center justify-end">
            <div className="hidden lg:block mr-10"><Link to="/cart" className='text-white px-2 text-sm'>Cart</Link><a className="inline-flex py-2 px-4 mr-4 items-center justify-center text-sm font-medium uppercase text-white hover:text-violet-500" href="#">SIGN In</a><a className="inline-flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full" href="#">SIGN UP</a>
            </div>
          <button  className="text-white hover:text-violet-500">
            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 16H29" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 8H29" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 24L29 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
          </div>
           <div  className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
        <div className="fixed inset-0 bg-violet-900 opacity-20" />
        
          {/* mobile */}
    <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
      <div className="flex mb-auto items-center">
        <a className="inline-block mr-auto" href="#">
          <img className="h-10" src="casper-assets/logos/casper-logo.svg" alt />
        </a>
        <button >
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
          </div>
          
        
      <div className="py-12 mb-auto">
        <ul className="flex-col">
          <li className="mb-6"><a className="inline-block text-base text-black font-medium uppercase" href="#">FEATURED</a></li>
          <li className="mb-6"><a className="inline-block text-base text-black font-medium uppercase" href="#">SOLUTIONS</a></li>
          <li className="mb-6"><a className="inline-block text-base text-black font-medium uppercase" href="#">PRODUCTS</a></li>
          <li><a className="inline-block text-base text-black font-medium uppercase" href="#">ARTICLES</a></li>
        </ul>
      </div>
          <div><a className="flex py-2 px-4 mb-4 items-center justify-center text-sm font-medium uppercase text-violet-900 hover:text-violet-500" href="#">SIGN IN</a><a className="flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full" href="#">SIGN UP</a> <Link to="/cart" className='text-white'>cart</Link></div>
         
    </nav>
  </div>
  </nav>
  )
}

export default Navbar
