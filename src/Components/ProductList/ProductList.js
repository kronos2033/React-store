import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

export default function ProductList({ products, addProduct, purchaseList }) {
  return (

    <div className='product-list'>
      {products.map((product) => {
        const isAdded = purchaseList.some(
          (purchaseItem) => purchaseItem.id === product.id
        );
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            img={product.image}
            price={product.price}
            count={product.count}
            addProduct={addProduct}
            isProduct
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
}
