import React from "react";
import { Link } from "react-router-dom";
import Icon from "../img/icon.png";
/*import "../fontello/css/fontello.css";*/
import "./fontello/css/fontello.css";

const Nav = props => {
  const fruits = props.fruits.filter(item => {
    return item.ordered > 0;
  });

  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <img src={Icon} alt="Fruit" className="mr-1 rounded-circle" />
      <a className="navbar-brand d-none d-lg-inline" href="#">
        Fresh Vegetables
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#menu"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/store" className="nav-link">
              Store
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-link">
              History
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/loginPage" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
        <button className="btn btn-light" onClick={props.handleOrder}>
          <i className="icon-basket mr-1" />
          Koszyk ({fruits.length})
        </button>
      </div>
    </nav>
  );
};

export default Nav;
