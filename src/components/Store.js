import React from "react";
import Order from "./Order.js";
import imgSold from "../img/sold.png";
const Store = ({
  tablica,
  handleAddItem,
  orderOn,
  removeOrder,
  handleOrderHistory
}) => {
  const store = tablica.map(item => (
    <div
      className={
        item.ammount ? "col-sm-6 col-md-4" : "col-sm-6 col-md-4 emptyDiv"
      }
      key={item.id}
    >
      <figure>
        <img
          src={item.img}
          alt="foto"
          className="imgFruit figure-img rounded"
        />
        {item.ammount ? null : (
          <img
            src={imgSold}
            alt="sold"
            className={item.ammount ? null : "empty"}
          />
        )}

        <figcaption className="figure-caption">
          {item.name}
          <br />
          Ilość: {item.ammount} <br />
          Cena: {item.price} PLN <br />
          <button
            onClick={() => handleAddItem(item.id)}
            className="btn btn-outline-primary "
          >
            Dodaj
          </button>
        </figcaption>
      </figure>
    </div>
  ));
  return (
    <div className="wrapper-inside">
      <div className="container mt-3">
        <div className="row">{store}</div>
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

export default Store;

/*
<>
<div className="row">{store}</div>
<div id="showIt" class="collapse">
  Tu cos beedzie jakis fajny tekst
</div>
</>*/
