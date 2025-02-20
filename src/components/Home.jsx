import React, { useState } from 'react'
import { useAuth } from '../Authentication/AuthContext'
const Home = () => {
    const{user,isloggedin}=useAuth()
    const [anyuser, setanyuser] = useState(isloggedin)
    console.log(user)
  return (
    <>
    <h1>hii</h1>
    <div>{isloggedin?user?.name:"no user logged in"}</div>
    </>
  )
}

export default Home