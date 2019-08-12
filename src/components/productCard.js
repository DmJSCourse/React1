import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';

const ProductCard = (props) => (
  <CardDeck>
    <Card style={{ width: '18em' }}>
      <Card.Img width="90%" height="50%" src={props.product.imgSrc} />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
          For : {props.product.gender}<br></br>
          Brand: {props.product.brand}<br></br>
          Sizes available: {Object.values(props.product.size).map(key => (key.sizeName + ' ' + key.count + " "))}<br></br>
          Price: {props.product.price} <br></br>
          Discount: {props.product.discount * 100}%<br></br>
          Price with discount: {props.product.price * props.product.discount}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  </CardDeck>
);

export default ProductCard;
