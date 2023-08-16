import React from 'react'
import { useParams } from 'react-router-dom'
import { inventoryData } from '../Data/InventoryData';
import "./Description.css"

const Description = () => {
const {id}=useParams();
const descProd=inventoryData.find(prod=>prod.id==id)
console.log(descProd);
  return (
    <div className='desc-section'>
        <h1>{descProd.name}</h1>
        <img src={descProd.imageUrl} alt={descProd.name}/>
        <p>Price: {descProd.price}</p>
        <p>Stock: {descProd.stock}</p>
        <p>Supplier: {descProd.supplier}</p>
        <p>Department:{descProd.department}</p>
        <p>SKU: {descProd.sku}</p>
        <p>Delivered: {descProd.delivered}</p>
        <p>Description: {descProd.description}</p>
    </div>
  )
}

export default Description