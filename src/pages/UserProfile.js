import React from "react";
import { Card, Row, Col, Badge, ListGroup } from "react-bootstrap";

const UserProfile = ({ user }) => {
  const userImage =
    "https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png";

  const { id, name, address, phone, about, likes, dislikes } = user;

  return (
    <Card className="my-3 rounded px-5">
      <Row>
        <Col md="auto" className="my-auto">
          <Card.Img
            src={userImage}
            variant="top"
            alt="user"
            style={{
              height: "180px",
              width: "180px",
            }}
          />
        </Col>
        <Col>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>ID: {id}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Name: {name}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Address: {address}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Phone: {phone}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>About: {about}</h5>
              </ListGroup.Item>
              {likes && (
                <ListGroup.Item>
                  <h5>
                    Likes:
                    {likes.map((like) => (
                      <Badge
                        className="mx-1 p-2"
                        variant="info"
                        pill
                        key={like}
                      >
                        {like}
                      </Badge>
                    ))}
                  </h5>
                </ListGroup.Item>
              )}
              {dislikes && (
                <ListGroup.Item>
                  <h5>
                    Dislikes:
                    {likes.map((dislike) => (
                      <Badge
                        className="mx-1 p-2"
                        variant="warning"
                        pill
                        key={dislike}
                      >
                        {dislike}
                      </Badge>
                    ))}
                  </h5>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default UserProfile;
