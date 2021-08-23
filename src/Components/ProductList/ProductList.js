import { clearConfigCache } from 'prettier';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

export default function ProductList(props) {
  return (
    <div className='product-list'>
      {props.products.map((product) => {
        console.log(product.image)
        return (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            img={product.image}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
