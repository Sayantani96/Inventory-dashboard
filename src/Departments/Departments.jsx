import React, { useContext } from 'react'
import '../Dashboard/Dashboard.css'
import { inventoryData } from '../Data/InventoryData'
import {FilterContext} from '../Context/FilterContext'
import { useNavigate } from 'react-router-dom'

const Departments = () => {
  const {dispatch}=useContext(FilterContext)
  const navigate=useNavigate();
  const navigateCategory=(e)=>{
    dispatch({
      type:'DEPT_FILTER',
          payload:{
            inventory:inventoryData,
            dept:e.target.innerHTML
    }
  })
    navigate("/products")
  }
  return (
    <div className='dashboard-display'>
      <div className="info-card" onClick={navigateCategory}>
        Kitchen 
      </div>
      <div className="info-card" onClick={navigateCategory}>
        Clothing      
      </div>
      <div className="info-card" onClick={navigateCategory}>
        Toys
      </div>
    </div>
  )
}

export default Departments