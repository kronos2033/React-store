import './ProductCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
export default function ProductCard({ img, title, description, price, id, addProduct,deletePurchase, isProduct}) {
  const floverImage =
  'https://flowers-expert.ru/upload/iblock/d30/d30417173593176bf61c7da7d52d7099.jpg';

  const style = isProduct? { width: '32em' } : { width: '40em' }
  const addToCart = () => {
    addProduct(img, title, price,id)
  }

  const handleDelete = () => {
    deletePurchase(id)
  }

  return (

    
    <div className='card'>
    <Card style={style}>
      <Card.Img variant='top' src={floverImage} alt='product-image' className='card__img' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <div className='product-card__container'>
        <span className='product-card__price'>{`${price} RUP`}</span>
        {isProduct? 
        <Button variant='primary' onClick={addToCart}>Добавить в корзину</Button>:
        <CloseButton onClick={handleDelete}/>
        }
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}
