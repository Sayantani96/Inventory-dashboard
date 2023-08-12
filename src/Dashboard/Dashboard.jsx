import React, {useState,useEffect} from 'react'
import './Dashboard.css'
import { inventoryData } from '../Data/InventoryData'

const Dashboard = () => {
    const [totalStock,setTotalStock]=useState(0);
    const [totalDelivered,setTotalDelivered]=useState(0);
    const[lowStockItems,setLowStockItems]=useState();
    useEffect(()=>{
        const calculateTotalStock=inventoryData.reduce((prev,curr)=>{
           return prev+curr.stock 
        },0);
        setTotalStock(calculateTotalStock)
        const calculateTotalDelivered=inventoryData.reduce((prev,curr)=>{
            return prev+curr.delivered 
         },0);
         setTotalDelivered(calculateTotalDelivered)
        const noOfLowStockItems=inventoryData.filter(prod=>prod.stock<=10);
        setLowStockItems(noOfLowStockItems.length);

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
        <p>
            {totalDelivered}
        </p>
            <p>Total Delivered</p> 
        </div>
        <div className="info-card">
        <p>
            {lowStockItems}
        </p>
            <p>Low Stock Items</p>
        </div>
    </div>
  )
}

export default Dashboard