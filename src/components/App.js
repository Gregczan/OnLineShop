import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import imgApple from "../img/imgApple.jpg";
import imgPear from "../img/imgPeach.jpg";
import imgPlumm from "../img/imgPlum.jpg";
import imgPeach from "../img/imgPeach.jpg";
import imgAnanas from "../img/imgAnanas.jpg";
import "./App.css";
import Nav from "./Nav";
import Page from "./Page";

class App extends React.Component {
  state = {
    fruits: [
      {
        id: 0,
        name: "Jabłka anton",
        description:
          "Soczyste jabłka o lekko kwaskowatym smaku. Idealne również do ciast",
        ammount: 5,
        price: 2.3,
        ordered: 0,
        img: imgApple
      },
      {
        id: 1,
        name: "Gruszka",
        description:
          "Chrupiącym gruszki z soczystym miąższem o lekkim posmaku kwaskowatości",
        ammount: 10,
        price: 2.6,
        ordered: 0,
        img: imgPear
      },
      {
        id: 2,
        name: "Śliwka Bluefree",
        description: "Soczyste śliwki ze słodkim miąższem",
        ammount: 7,
        price: 1.3,
        ordered: 0,
        img: imgPlumm
      },
      {
        id: 3,
        name: "Brzoskwinia",
        description:
          "Brzoskwinie o lekko kwaskowatym smaku, wyjątkowe soczyste",
        ammount: 5,
        price: 2.9,
        ordered: 0,
        img: imgPlumm
      },
      {
        id: 4,
        name: "Ananas",
        description: "Słodka orzeźwiająca odmiana",
        ammount: 3,
        price: 2.0,
        ordered: 0,
        img: imgAnanas
      },
      {
        id: 5,
        name: "Węgierka",
        description:
          "Brzoskwinie o lekko kwaskowatym smaku, wyjątkowe soczyste",
        ammount: 5,
        price: 2.8,
        ordered: 0,
        img: imgPeach
      },
      {
        id: 6,
        name: "Ananas",
        description:
          "Brzoskwinie o lekko kwaskowatym smaku, wyjątkowe soczyste",
        ammount: 5,
        price: 3.7,
        ordered: 0,
        img: imgPeach
      },
      {
        id: 7,
        name: "Nektarynka",
        description:
          "Brzoskwinie o lekko kwaskowatym smaku, wyjątkowe soczyste",
        ammount: 5,
        price: 1.7,
        ordered: 0,
        img: imgPeach
      },
      {
        id: 8,
        name: "Banan",
        description:
          "Brzoskwinie o lekko kwaskowatym smaku, wyjątkowe soczyste",
        ammount: 5,
        price: 4.0,
        ordered: 0,
        img: imgPeach
      }
    ],
    orderOn: false,
    orderHistory: [],
    user: {
      name: "Greg",
      roles: ["user"],
      rights: ["view_users"]
    }
  };
  handleAddItem = id => {
    const fruits = this.state.fruits;
    fruits.map(item => {
      if (item.id === id) {
        if (item.ammount > 0) {
          item.ammount--;
          item.ordered++;
        }
      }
      return item;
    });
    this.setState({
      fruits: fruits
    });
  };

  handleOrder = () => {
    this.setState(prevState => ({
      orderOn: !prevState.orderOn
    }));
  };

  removeOrder = id => {
    const orderedFruits = this.state.fruits.map(item => {
      if (item.id === id) {
        item.ammount = item.ammount + item.ordered;
        item.ordered = 0;
      }
      return item;
    });

    this.setState(prevState => ({
      fruits: orderedFruits
    }));
  };

  handleOrderHistory = total => {
    const newHistory = [];
    var date = new Date().toISOString().slice(0, 10);
    var hour = new Date().toISOString().slice(11, 19);
    date.toLocaleString();
    const mirror = this.state.fruits.filter(item => item.ordered > 0);
    mirror.forEach(item => {
      if (item.ordered > 0) {
        const newitem = {
          name: item.name,
          ordered: item.ordered,
          img: item.img,
          price: item.price,
          date: date,
          hour: hour,
          total: total
        };
        newHistory.push(newitem);
      }
    });

    this.setState(prevState => ({
      orderHistory: [...prevState.orderHistory, newHistory]
    }));

    const orderFruits = this.state.fruits.map(item => {
      if (item.ordered > 0) {
        item.ordered = 0;
      }

      return item;
    });

    this.setState({
      fruits: orderFruits
    });
  };

  render() {
    return (
      <Router>
        <div className="wrapper">
          <header>
            <Nav {...this.state} handleOrder={this.handleOrder} />
          </header>
          <main>
            <Page
              {...this.state}
              handleAddItem={this.handleAddItem}
              removeOrder={this.removeOrder}
              handleOrderHistory={this.handleOrderHistory}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
