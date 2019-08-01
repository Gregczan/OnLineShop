import React from "react";
import Order from "./Order";
import "../components/history.css";

const History = ({
  tablica,
  orderOn,
  removeOrder,
  orderHistory,
  handleOrderHistory
}) => {
  const orderHistoryReverse = orderHistory.reverse();
  const renderOrderHistory = orderHistoryReverse.map(item => (
    <ul className="list-unstyled col-9 m-auto p-1 ">
      <div className="orderTitle p-1">
        Order from <i className="icon-calendar ml-2" />
        {item[0].date}
        <i className="icon-stopwatch ml-2" /> {item[0].hour}
        <h5 className="text-right">Total: {item[0].total} zł</h5>
      </div>

      {item.map(subitem => (
        <li className="media my-2 p-0">
          <img src={subitem.img} alt="product" className="mr-2 small-fotos" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">
              <b>{subitem.name}</b>
            </h5>
            <div>
              <span className="mr-2">
                <b>Ammount:</b> {subitem.ordered}
              </span>{" "}
              <span className="mr-2">
                <b>Price:</b> {subitem.price} zł
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ));

  return (
    <div class="wrapper-inside">
      <div class="container-fluid">
        <h1> Order History</h1>
        {renderOrderHistory}
      </div>
      <Order
        orderOn={orderOn}
        tablica={tablica}
        removeOrder={removeOrder}
        handleOrderHistory={handleOrderHistory}
      />
    </div>
  );
};

export default History;

/*item.map(subItem => (
  <div>
    <img src={subItem.img} alt="" />
  </div>
  ))*/
