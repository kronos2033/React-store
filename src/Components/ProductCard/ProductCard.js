import './ProductCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function ProductCard() {
  return (
    <Card style={{ width: '32em' }} className=''>
      <Card.Img variant='top' src='holder.js/100px180' alt='product-image' className='' />
      <Card.Body>
        <Card.Title>Название товара</Card.Title>
        <Card.Text>
          Описание товара
        </Card.Text>
        <Button variant='primary'>Добавить в корзину</Button>
      </Card.Body>
    </Card>
  );
}
