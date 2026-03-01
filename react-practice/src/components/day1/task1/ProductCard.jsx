import React from 'react'

const ProductCard = ({productname,price,addtocart}) => {
  return (
    <div>
        <h1>Product Name: {productname}</h1>
        <h1>Price: {price}</h1>
        <button className='bg-blue-300 rounded' onClick={()=>addtocart(productname)}>Add To Cart</button>
    </div>
  )
}

export default ProductCard