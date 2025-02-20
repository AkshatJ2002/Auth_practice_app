import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useAuth } from '../Authentication/AuthContext'
const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigation=useNavigate()
    const {isloggedin,handlesignup,handlelogin}=useAuth()
    const handler=async(e)=>{
        e.preventDefault()
        const session=await handlesignup(username,email,password);
        if(session){
            await handlelogin(email,password);
        }
        else
            alert("Invalid Credentials")
    }
    useEffect(() => {
             if(isloggedin)
                navigation('/')
            
        }, [isloggedin])
  return (
    <div className='flex w-full h-screen justify-center items-center'>
        <div className='flex flex-col border-1 p-8 rounded-xl gap-20 justify-center items-center'>
            <img src="" alt="My_App" />
            <form onSubmit={(e)=>handler(e)} className='flex flex-col gap-8 justify-center items-center'>
                <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Username'className='p-2 outline-none bg-zinc-200 rounded-md'/>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email ID'className='p-2 outline-none bg-zinc-200 rounded-md'/>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' className='p-2 outline-none bg-zinc-200 rounded-md'/>
                <button type='submit' className='bg-zinc-200 text-zinc-500 p-2 rounded-md w-2/3'>Register</button>
            </form>
            <h1 className='text-sm'>Already have an account ? <Link className='text-orange-400' to='/Login'>Login Now</Link></h1>
        </div>
    </div>
  )
}

export default Register