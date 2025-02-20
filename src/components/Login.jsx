import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useAuth } from '../Authentication/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const{isloggedin,handlelogin}=useAuth()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigation=useNavigate()
    const handler=async(e)=>{
        e.preventDefault()
        console.log(email,password)
        const session =await handlelogin(email,password)
        if(!session){
            setemail("")
            setpassword("")
            alert("Invalid Credentials")
        }
    }
    useEffect(() => {
         if(isloggedin)
            navigation('/')
        
    }, [isloggedin])
    
  return (
    <div className='flex w-full h-screen justify-center items-center'>
        <div className='flex flex-col border-1 p-8 rounded-xl gap-20 justify-center items-center'>
            <Link to='/'><img src="" alt="My_App" /></Link>
            <form onSubmit={(e)=>handler(e)} className='flex flex-col gap-8 justify-center items-center'>
                <input type="email" value={email} required onChange={(e)=>setemail(e.target.value)} placeholder='Email ID'className='p-2 outline-none bg-zinc-200 rounded-md'/>
                <input type="password" value={password} required onChange={(e)=>setpassword(e.target.value)} placeholder='Password' className='p-2 outline-none bg-zinc-200 rounded-md'/>
                <button type='submit' className='bg-zinc-200 text-zinc-500 p-2 rounded-md w-2/3'>Log IN</button>
            </form>
            <h1 className='text-sm'>Don't have an account ? <Link className='text-orange-400' to='/Register'>Register Now</Link></h1>
        </div>
    </div>
  )
}

export default Login