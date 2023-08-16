import React,{useState} from 'react'
import { inventoryData } from '../Data/InventoryData';

const AddProductForm = () => {
    const [newProdObj,setNewProdObj]=useState({
        id:0,
        department:'',
        name:'',
        description:'',
        price:0,
        stock:0,
        sku:'',
        supplier:'',
        delivered:0,
        imageUrl:''
    })

  const departments = ["clothing", "toys", "kitchen"];

  const handleDepartmentChange = (e) => {
    setNewProdObj({
        ...newProdObj,
        department:e.target.value
    })
  };

    const handleSubmit=(e)=>{
        e.preventDefault();
        inventoryData.push({
            ...newProdObj,
            id:inventoryData.length
        });
        alert("Product added")
        console.log(inventoryData)
    }
    const handleNameChange=(e)=>{
        setNewProdObj({
            ...newProdObj,
            name:e.target.value
        })
    }
    const handleDescriptionChange=(e)=>{
        setNewProdObj({
            ...newProdObj,
            description:e.target.value
        })
    }
    const handlePriceChange=(e)=>{
        setNewProdObj({
            ...newProdObj,
            price:e.target.value
        })
    }
    const handleStockChange=(e)=>{
        setNewProdObj({
            ...newProdObj,
            stock:e.target.value
        })
    }
    const handleSkuChange=(e)=>{
        setNewProdObj({
            ...newProdObj,
            sku:e.target.value
        })
    }
    const handleSupplierChange=(e)=>{
        setNewProdObj({
            ...newProdObj,
            supplier:e.target.value,
        })
    }
    const handleDeliveredChange=(e)=>{
        setNewProdObj({
            ...newProdObj,
            delivered:e.target.value,
        })
    }
    const handleImageChange=(e)=>{
        setNewProdObj({
            ...newProdObj,
            imageUrl:e.target.value,
        })
    }

  return (
    <div>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
    <div>
        <select name="department" id="department" onChange={handleDepartmentChange}>
      <option value="">Select Department</option>
      {departments.map((department) => (
        <option value={department} key={department}>
          {department}
        </option>
      ))}
    </select>
    </div>
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label for="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <label for="stock">Stock</label>
        <input
          type="number"
          name="stock"
          id="stock"
          onChange={handleStockChange}
        />
      </div>
      <div>
        <label for="stock">SKU</label>
        <input
          type="text"
          name="stock"
          id="stock"
          onChange={handleSkuChange}
        />
      </div>
      <div>
        <label for="stock">Supplier</label>
        <input
          type="text"
          name="stock"
          id="stock"
          onChange={handleSupplierChange}
        />
      </div>
      <div>
        <label for="stock">Delivered</label>
        <input
          type="text"
          name="stock"
          onChange={handleDeliveredChange}
        />
      </div>
      <div>
        <label for="stock">Image URL</label>
        <input
          type="text"
          name="stock"
          id="stock"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default AddProductForm