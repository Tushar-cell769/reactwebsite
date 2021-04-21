import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import AddProducts from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import ProductDetailsPage from "./ProductDetailsPage/ProductDetailsPage";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { LocalDatabase } from "./context/DataLayer";
import { auth, db } from "./Database/firebase";

const App = () => {
  const [data, dispatch] = LocalDatabase();
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch({
          type: "SET_USER",
          payload: user.uid,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
        // No user is signed in.
      }
    });
    db.collection("Products").onSnapshot((snapshot) => {
      let NewProducts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch({
        type: "SET_PRODUCTS_FROM_DB",
        data: NewProducts,
      });
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={AddProducts} />
        <Route
          path="/login"
          render={() => (data.user ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          path="/register"
          render={() => (data.user ? <Redirect to="/" /> : <Register />)}
        />
        <Route path="/categories" component={Categories} />
        <Route path="/product/:productId" component={ProductDetailsPage} />
        <Route path="/cart" component={Cart} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
