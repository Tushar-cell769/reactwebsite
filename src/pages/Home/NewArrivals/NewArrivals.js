import React, { useEffect, useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { db } from "../../../Database/firebase";
import "./NewArrivals.css";
import { AiFillStar } from "react-icons/ai";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("Products")
      .where("NewArrivals", "==", true)
      .onSnapshot((snapshot) => {
        let products = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(products);
      });
  });
  return (
    <div className="newArrivalsSection">
      <h3>New Arrivals</h3>
      <div className="newProductsContainer">
        {products.map((products, index) => {
          return (
            <div className="productsCards" key={index}>
              <div className="product">
                <div className="productsImageContainer">
                  <img
                    src={products.productImage}
                    className="productsImage"
                    alt="shopProducts"
                  />
                  <div className="product-icon">
                    <div className="add-to-cart-button">
                      <FaOpencart className="icon" />
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <div className="info-content">
                    <p>{products.Category}</p>
                    <div className="star-rating"></div>
                    <h6>
                      <Link to={`/product/${products.id}`}>
                        {products.productName}
                      </Link>
                    </h6>
                    <span>${products.productPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
