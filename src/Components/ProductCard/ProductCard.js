import './ProductCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function ProductCard(props) {
  return (
    <div className='card'>
    <Card style={{ width: '32em' }}>
      <Card.Img variant='top' src={props.img} alt='product-image' className='card__img' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div className='product-card__container'>
        <span className='product-card__price'>{props.price}</span>
        <Button variant='primary'>Добавить в корзину</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}
