import React from 'react';

const Navbar=()=>{
    return(
      <div className='  drop-shadow-2xl'>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white-400 mb-3 border-b border-gray-100">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-green-400" href="#pablo">
              pink Color
            </a>
            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
              <span className="block relative w-6 h-px rounded-sm bg-green-400"></span>
              <span className="block relative w-6 h-px rounded-sm bg-green-400 mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-green-400 mt-1"></span>
            </button>
          </div>
          <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="  px-3 nav-item">
                  <a className="link link-underline link-underline-black py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-400 hover:opacity-75" href="#pablo">
                    Discover
                  </a>
                </li>
                <li className="  px-3  nav-item">
                  <a className="link link-underline link-underline-black py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-400 hover:opacity-75" href="#pablo">
                    Profile
                  </a>
                </li>
                <li className="  px-3 nav-item">
            <a className="link link-underline link-underline-black py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-400 hover:opacity-75" href="#pablo">
              Setting
            </a>
          </li>
      </ul>
    </div>
          </div>
        </nav>
      </div>
        
    )
}
export default Navbar;