import './Purchases.css';
import ProductCard from '../ProductCard/ProductCard';
export default function Purchases({ purchaseList,deletePurchase }) {
    const isProduct = false
  return (
    <div className='purchases'>
      {purchaseList.map((purchase) => {
        return (
          <ProductCard
            key={purchase.id}
            id={purchase.id}
            title={purchase.title}
            img={purchase.img}
            price={purchase.price}
            deletePurchase={deletePurchase}
            isProduct ={isProduct}
          />
        );
      })}
    </div>
  );
}
