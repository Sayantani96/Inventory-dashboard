import React, {useState,useEffect} from 'react'
import './Dashboard.css'
import { inventoryData } from '../Data/InventoryData'

const Dashboard = () => {
    const [totalStock,setTotalStock]=useState(0);
    useEffect(()=>{
        const calculateTotalStock=inventoryData.reduce((prev,curr)=>{
           return prev+curr.stock 
        },0);
        setTotalStock(calculateTotalStock)
    },[inventoryData])
  return (
    <div className="dashboard-display">
        <div className="info-card">
            <p>
                {totalStock}
            </p>
            <p>Total Stock</p>
        </div>
        <div className="info-card">
        <p></p>
            <p>Total Delivered</p> 
        </div>
        <div className="info-card">
        <p></p>
            <p>Low Stock Items</p>
        </div>
    </div>
  )
}

export default Dashboard