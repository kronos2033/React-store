import React from 'react';
import './Cart.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
export default function Cart({ counter }) {
  return (
    <div className='cart'>
      <Button variant='primary' className='cart__btn'>
        <Badge bg='secondary' className='cart__counter'>
          {counter}
        </Badge>
      </Button>
    </div>
  );
}
