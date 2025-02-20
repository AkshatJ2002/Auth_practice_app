import React from 'react'
import Header from './components/Header'
import { useLocation } from "react-router-dom";
import Routers from'./Routers'


const  App = () => {
  const location = useLocation();
  return (
    <div>
      {(location.pathname !== "/Login" && location.pathname !== "/Register") && <Header />}
      <Routers/>
    </div>
  )
}

export default  App