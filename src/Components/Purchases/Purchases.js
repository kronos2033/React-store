import './Purchases.css';
import ProductCard from '../ProductCard/ProductCard';
import { useState, useEffect } from 'react';

export default function Purchases({ purchaseList, deletePurchase }) {
  const isProduct = false;
  // let initialPrice = 0
  // const [priceForOne, setPriceForOne] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)
  // initialPrice +=priceForOne
  
  // useEffect(()=> {
  //   setTotalPrice(totalPrice => {
  //     return  priceForOne
  //   })
  // },[priceForOne])

  const calculateTotal = (price) => {
    setTotalPrice(prevPrice=>prevPrice + price)
 }

  return (
    <div className='purchases'>
      <h2 className='purchases__title'>Корзина</h2>
      {purchaseList.map((purchase) => {
        {/* initialPrice = initialPrice + purchase.price */}
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
            // setPrice={setPriceForOne}
            handleTotal={calculateTotal}
         
          />
        );
      })}
      <p className='purchases__price'>Итого: {totalPrice}Р</p>
    </div>
  );
}
