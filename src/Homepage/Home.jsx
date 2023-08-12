import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <>
    <div className='display-ui'>
         <div className='side-nav'>
            <ul>
            <NavLink to="/dashboard">
            <li>Dashboard</li>
            </NavLink>
            <NavLink to="/departments">
            <li>Departments</li>
            </NavLink>
            <NavLink to="/products">
            <li>Products</li>
                </NavLink>            
            </ul>
         </div>
        
         <Outlet/>
    </div>
    </>
   
  )
}

export default Home