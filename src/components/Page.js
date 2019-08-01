import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import History from "./History";
import LoginPage from "./loginPage";
const Page = props => {
  const user = props.user;
  const tablica = props.fruits;
  const handleAddItem = props.handleAddItem;
  const orderOn = props.orderOn;
  const removeOrder = props.removeOrder;
  const handleOrderHistory = props.handleOrderHistory;
  const orderHistory = props.orderHistory;

  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/store"
          render={props => (
            <Store
              tablica={tablica}
              handleAddItem={handleAddItem}
              orderOn={orderOn}
              removeOrder={removeOrder}
              handleOrderHistory={handleOrderHistory}
            />
          )}
        />
        <Route
          path="/history"
          render={props => (
            <History
              tablica={tablica}
              handleAddItem={handleAddItem}
              orderOn={orderOn}
              removeOrder={removeOrder}
              orderHistory={orderHistory}
              handleOrderHistory={handleOrderHistory}
            />
          )}
        />
        <Route path="/loginPage" render={props => <LoginPage user={user} />} />
      </Switch>
    </>
  );
};

export default Page;
