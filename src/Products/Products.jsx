import React, {useContext, useState} from 'react'
import './Products.css'
import { NavLink } from 'react-router-dom';
import { FilterContext } from '../Context/FilterContext';
import { inventoryData } from '../Data/InventoryData';
const Products = () => {

  const {state:{inventory},dispatch}=useContext(FilterContext)
  

  const handleDeptChange = (e) => {
    console.log(e.target.value)
      if(e.target.value=="All Departments"){
        dispatch({
          type:'DEPT_FILTER',
          payload:{
            inventory:inventoryData,
            dept:e.target.value
          }
        })
      }
      else{
        console.log("Entered here")
        dispatch({
          type:'DEPT_FILTER',
          payload:{
            inventory:inventoryData,
            dept:e.target.value
          }
        })
      }
  };
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="products-section">
    <div className="prod-header-section">
    <h2>Products</h2>
    <select onChange={handleDeptChange}>
    <option value="All Departments" selected >
            All Department
          </option>
          <option value="Kitchen" >
            Kitchen
          </option>
          <option value="Toys" >
            Toys
          </option>
          <option value="Clothing" >
            Clothes
          </option>
      </select>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="lowStockCheckbox">Low Stock</label>
      <select>
    <option value="Name" selected >
            Name
          </option>
          <option value="Price" >
            Price
          </option>
          <option value="Stock" >
            Stock
          </option>
      </select>
      <button>New</button>
    </div>
      
      <table>
        <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
       
        {
          inventory.map(prod=>
          <tr >
            <td>
              <img src={prod.imageUrl} alt="prod-image" className="prod-img"/>
            </td>
            <td>
            <NavLink to={"/products/"+prod.id}>
            {prod.name}
            </NavLink>
              
            </td>
            <td>{prod.description}</td>
            <td>{prod.price}</td>
            <td>{prod.stock}</td>
            <td>{prod.supplier}</td>  
          </tr>
          )
        }
        </tbody>
      </table>
      </div>
  )
}

export default Products