import React from "react";

const Order = ({ orderOn, tablica, removeOrder, handleOrderHistory }) => {
  const orderedItem = tablica.filter(item => item.ordered > 0);
  var ammount = 0;

  orderedItem.map(item => (ammount = ammount + item.price * item.ordered));
  var ammountDecimals = ammount.toFixed(2);

  function renderList() {
    const renderList = orderedItem.map((item, index) => (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.ordered}</td>
        <td>{item.price}zł</td>
        <td>
          <button
            className="btn btn-outline-light ml-2"
            onClick={() => removeOrder(item.id)}
          >
            X
          </button>
        </td>
      </tr>
    ));
    return renderList;
  }

  return (
    <div id="sideBar" className={orderOn ? "active" : null}>
      <h5 className="title">Twoje zamówienie</h5>
      <table className="ordertable">
        <thead>
          <tr>
            <th>Order</th>
            <th>Ilość</th>
            <th>Cena</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </table>
      <p className="total">Total: {ammountDecimals} zł </p>
      <div class="col text-center">
        {orderedItem.length > 0 ? (
          <button
            className="btn btn-outline-light"
            onClick={() => handleOrderHistory(ammountDecimals)}
          >
            Zamów
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Order;
