import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

export default function ProductList({ products, addProduct }) {
  
  return (
    <div className='product-list'>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            img={product.img}
            price={product.price}
            addProduct={addProduct}
            isProduct
          />
        );
      })}
    </div>
  );
}
