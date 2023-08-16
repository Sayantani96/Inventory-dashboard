import React from 'react'
import '../Dashboard/Dashboard.css'
import { inventoryData } from '../Data/InventoryData'
import { NavLink } from 'react-router-dom'
const Departments = () => {
  return (
    <div className='dashboard-display'>
      <div className="info-card">
        <NavLink to="/products">
        Kitchen
        </NavLink>
        
      </div>
      <div className="info-card">
    <NavLink to="/products">
    Clothing
    </NavLink>       
      </div>
      <div className="info-card">
        <NavLink to="/products">
        Toys
        </NavLink>
       
      </div>
    </div>
  )
}

export default Departments