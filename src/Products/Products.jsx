import React, {useState} from 'react'
import './Products.css'
import {inventoryData} from '../Data/InventoryData'
import { NavLink } from 'react-router-dom';
const Products = () => {

  const handleChange = (e) => {

    const [categories, setCategories] = useState([]);
    setCategories([e.target.value]);
  };
  const [isChecked, setIsChecked] = useState(false);

  // useEffect(() => {
  //   const stockQuantity = product.stockQuantity;
  //   setIsChecked(stockQuantity <= 10);
  // }, [inventoryData]);


  return (
    <div className="products-section">
    <div className="prod-header-section">
    <h2>Products</h2>
    <select onChange={handleChange}>
    <option value="All Departments" selected >
            All Department
          </option>
          <option value="Kitchen" >
            Kitchen
          </option>
          <option value="Toys" >
            Toys
          </option>
          <option value="Clothes" >
            Clothes
          </option>
      </select>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="lowStockCheckbox">Low Stock</label>
      <select onChange={handleChange}>
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
          inventoryData.map(prod=>
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