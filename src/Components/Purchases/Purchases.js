import './Purchases.css';
import ProductCard from '../ProductCard/ProductCard';
import { useState, useEffect } from 'react';

export default function Purchases({ purchaseList, deletePurchase }) {
  const isProduct = false;
  let initialPrice = 0
  const [priceForOne, setPriceForOne] = useState(0);
  const [totalPrice, setTotalPrice] = useState(initialPrice)
  initialPrice +=priceForOne
//   useEffect(()=> {
//     setTotalPrice(totalPrice=> {
// console.log(priceForOne)
//       return totalPrice + priceForOne
//     })
//   },[priceForOne])

  return (
    <div className='purchases'>
      <h2 className='purchases__title'>Корзина</h2>
      {purchaseList.map((purchase) => {
        initialPrice = initialPrice + purchase.price
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
            setPrice={setPriceForOne}
         
          />
        );
      })}
      <p className='purchases__price'>Итого: {initialPrice}Р</p>
    </div>
  );
}
