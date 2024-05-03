import React, { useState } from "react"
import { LinkData2 } from "../assets/data/dummydata"
import { NavLink } from "react-router-dom"
import { HiOutlineMenuAlt1,} from "react-icons/hi"

export const Header2 = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className='bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
        <div className='container flex justify-between items-center'>
          <nav className={`flex items-center justify-between ${open ? "mobile-view-2" : "desktop-view-2"}`}>
            <ul className='flex items-center gap-6'>
              {LinkData2.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to={link.url}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className='account flex items-center gap-1'>           
            <button className='open-menu' onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}