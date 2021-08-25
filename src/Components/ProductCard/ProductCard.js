import './ProductCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { calculatePrice } from '../../utils/functions';
import { useState, useEffect } from 'react';
export default function ProductCard({
  img,
  title,
  description,
  price,
  id,
  count,
  addProduct,
  deletePurchase,
  isProduct,
  isAdded,
  handleTotal
}) {
  const [value, setValue] = useState(1);
  const floverImage =
    'https://flowers-expert.ru/upload/iblock/d30/d30417173593176bf61c7da7d52d7099.jpg';
  const style = isProduct ? { width: '32em' } : { width: '60em' };
  let selectArray = [];
  for (let i = 0; i < count; i++) {
    selectArray[i] = i + 1;
  }
  useEffect(()=> {
    handleTotal(calculatePrice(price, value))
  }, [])
 
  const addToCart = () => {
    addProduct(img, title, price, id, count);
  };

  const handleDelete = () => {
    deletePurchase(id);
  };
  const handleChange = (e) => {
    handleTotal(calculatePrice(price, e.target.value - value))
    setValue(e.target.value);

  };
  return (
    <div className='card'>
      <Card style={style}>
        {isProduct && (
          <Card.Img
            variant='top'
            src={floverImage}
            alt='product-image'
            className='card__img'
          />
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className='product-card__container'>
            <span className='product-card__price'>{`${price} RUP`}</span>
            {!isProduct && (
              <select
                name='select'
                className='card__select'
                value={value}
                onChange={handleChange}
              >
                {selectArray.map((i) => {
                  return (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  );
                })}
              </select>
            )}
            {isProduct ? (
              <Button variant='primary' onClick={addToCart} disabled={isAdded}>
                Добавить в корзину
              </Button>
            ) : (
              <CloseButton onClick={handleDelete} className='card__close-btn' />
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
