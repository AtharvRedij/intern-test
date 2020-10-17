import React from "react";
import { ListGroup } from "react-bootstrap";

const Header = ({ page, setPage }) => {
  return (
    <ListGroup horizontal className="justify-content-md-center my-3">
      <ListGroup.Item
        onClick={() => setPage("profile")}
        active={page === "profile"}
        style={{ cursor: "pointer" }}
      >
        User Profile
      </ListGroup.Item>
      <ListGroup.Item
        onClick={() => setPage("order")}
        active={page === "order"}
        style={{ cursor: "pointer" }}
      >
        Order Summary
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Header;
