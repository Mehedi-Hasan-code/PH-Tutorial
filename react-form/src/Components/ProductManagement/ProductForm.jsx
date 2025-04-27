import React from 'react'

const ProductForm = ({handleAddProduct}) => {
    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        
        const newProduct = {
            name, 
            price,
            quantity
        }
        handleAddProduct(newProduct)
        
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Product name' />
            <br />
            <input type="text" name='price' placeholder='Product price' />
            <br />
            <input type="text" name='quantity' placeholder='Product quantity' />
            <br />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default ProductForm