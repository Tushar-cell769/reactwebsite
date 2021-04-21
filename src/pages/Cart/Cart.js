import React, { useEffect, useState } from "react";
import { Container, Image, Table } from "react-bootstrap";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import HeadingBanner from "../../components/HeadingBanner/HeadingBanner";
import { LocalDatabase } from "../../context/DataLayer";
import { db } from "../../Database/firebase";
import "./Cart.css";
import bg from "../../images/Banners/shop-bg.jpg";
import StripePayment from "../../components/Stripe/StripePayment";

const Cart = () => {
  const [state, dispatch] = LocalDatabase();
  const [cartData, setCartData] = useState([]);
  let totalPrice = 0;

  const handleDelete = (productToBeDelete) => {
    console.log(productToBeDelete);
    dispatch({
      type: "REMOVER_FROM_CART",
      proId: productToBeDelete,
    });
    console.log(cartData);
  };

  const printAmount = () => {
    console.log(cartData.productPrice);
  };

  useEffect(() => {
    (async () => {
      let pItem = [];
      const keys = Object.keys(state.cart);
      const result = keys.map((key) => {
        let t = db.collection("Products").doc(key).get();
        return t;
      });
      const data = await Promise.all(result);
      data.forEach((i) => pItem.push({ ...i.data(), id: i.id }));
      setCartData(pItem);
    })();
  }, [cartData]);

  return (
    <>
      <HeadingBanner title="Cart" image={bg} />
      <section className="page-cart">
        <div className="content-pages">
          <div className="my-container">
            <div className="content-about content-cart-page">
              <Table
                responsive
                className="shop_table table--responsive cart table"
              >
                <thead>
                  <tr className="cart-title">
                    <th className="product-thumbnail" colSpan="2">
                      Product Name
                    </th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Total</th>
                    <th className="product-remove">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((products, id) => {
                    return (
                      <>
                        <tr className="cart-item" key={id}>
                          <td className="product-thumbnail">
                            <Link to="/">
                              <Image
                                src={products.productImage}
                                alt={products.productName}
                              />
                            </Link>
                          </td>
                          <td className="product-name-thumb">
                            <Link to="/">{products.productName}</Link>
                          </td>
                          <td className="product-price">
                            {`$ ${products.productPrice}`}
                          </td>
                          <td className="product-quantity">
                            {Object.values(state.cart)[id]}
                          </td>
                          <td className="product-subtotal">
                            $
                            {products.productPrice *
                              Object.values(state.cart)[id]}
                          </td>
                          <td className="product-remove">
                            <IoIosRemoveCircleOutline
                              onClick={() => handleDelete(products.id)}
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
              <div>
                <p>
                  {cartData.map((e) => {
                    totalPrice += parseInt(e.productPrice);
                  })}
                  {totalPrice}
                </p>
                <StripePayment price={totalPrice} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
