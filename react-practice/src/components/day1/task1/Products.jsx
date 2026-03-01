import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    const addtocart = (productname) => {
            console.log(`Added ${productname} to cart`)
    }
  return (
    <div>
        <ProductCard productname='Shoes' price={1200} addtocart={addtocart}></ProductCard>
        <ProductCard productname='Dresses' price={5500} addtocart={addtocart}></ProductCard>
        <ProductCard productname='Watch' price={3200} addtocart={addtocart}></ProductCard>
    </div>
  )
}

export default Products