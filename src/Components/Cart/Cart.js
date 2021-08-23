import './Cart.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
export default function Cart() {
  return (
    <div className='cart'>
     <Button variant='primary' className='cart__btn'>
       <Badge bg='secondary' className='cart__counter'>1</Badge>
    </Button>
    </div>
  );
}
