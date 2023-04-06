import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={ProductList}></Route>
          <Route path="/details" Component={Details}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route path="*" Component={Default}></Route>
        </Routes>
        <Modal />
      </>
    );
  }
}

export default App;
