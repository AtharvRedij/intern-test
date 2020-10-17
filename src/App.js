import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import UserProfile from "./pages/UserProfile";
import OrderSummary from "./pages/OrderSummary";
import Header from "./components/Header";

const API_URL = "https://indapi.kumba.io/webdev/assignment";

const App = () => {
  const [page, setPage] = useState("profile");
  const [user, setUser] = useState({});
  const [restaurant, setRestaurant] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      setUser(data.user);
      setRestaurant(data.restaurant);
      setItems(data.items);
    };

    getData();
  }, []);

  return (
    <Container>
      <Header page={page} setPage={setPage} />
      {page === "profile" ? (
        <UserProfile user={user} />
      ) : (
        <OrderSummary restaurant={restaurant} items={items} />
      )}
    </Container>
  );
};

export default App;
