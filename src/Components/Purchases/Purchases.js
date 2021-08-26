import React from 'react';
import './Purchases.css';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';

export default function Purchases({ purchaseList, deletePurchase }) {
  const isProduct = false;
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotal = (price) => {
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  const a = 2;
  console.log(a);
  return (
    <div className='purchases'>
      <h2 className='purchases__title'>Корзина</h2>
      {purchaseList.map((purchase) => {
        return (
          <ProductCard
            key={purchase.id}
            id={purchase.id}
            title={purchase.title}
            img={purchase.image}
            price={purchase.price}
            count={purchase.count}
            deletePurchase={deletePurchase}
            isProduct={isProduct}
            handleTotal={calculateTotal}
          />
        );
      })}
      <p className='purchases__price'>Итого: {totalPrice}Р</p>
    </div>
  );
}

//TODO ESlint || Jshint
