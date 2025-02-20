import React from 'react'
import {NavLink } from 'react-router-dom'
import { useAuth } from '../Authentication/AuthContext'
const Header = () => {
    const{isloggedin,handlelogout}=useAuth()
  return (
    <div className='flex flex-row justify-between p-10'>
        <NavLink to='/'><img src="" alt="My_App" /></NavLink>
        <div className='flex flex-row gap-8'>
            {["Home","Services","About","Contact"].map((elem)=>(
                <NavLink to={`/${elem}`==='/Home'?'/':`/${elem}`}>{elem}</NavLink>
            ))}
        </div>
        {isloggedin?<NavLink><button onClick={handlelogout} className='border-1 p-1 px-4 rounded-md cursor-pointer'>Logout</button></NavLink>:<NavLink to='/Login'><button className='border-1 p-1 px-4 rounded-md cursor-pointer'>Login</button></NavLink>
        }
        {/* <div className='flex flex-row'>
            
        </div> */}
    </div>
  )
}

export default Header