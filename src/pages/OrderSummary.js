import React from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";

const OrderSummary = ({ restaurant, items }) => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h4>{restaurant.name}</h4>
        <h5>{`${restaurant.street}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`}</h5>
      </ListGroup.Item>

      <ListGroup.Item>
        <Row>
          {items.map(({ name, category, price }) => (
            <Col key={name}>
              <Card style={{ width: "18rem" }} className="my-2">
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {category}
                  </Card.Subtitle>
                  <Card.Text>Rs. {price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default OrderSummary;
