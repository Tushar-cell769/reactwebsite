import React, { useEffect, useState } from "react";
import { db } from "../Database/firebase";
import "./productDetailsPage.css";
import { BsBag } from "react-icons/bs";
import { LocalDatabase } from "../context/DataLayer";
import { Link } from "react-router-dom";
import { event, isArray } from "jquery";

const ProductDetailsPage = ({ match }) => {
  const [products, setproducts] = useState([]);
  const [state, dispatch] = LocalDatabase();
  const rating = [1, 2, 3, 4, 5];

  const addToCart = (i) => {
    console.log(i);
    dispatch({
      type: "ADD_TO_CART",
      proId: i,
    });
  };

  useEffect(() => {
    (async () => {
      var docRef = db.collection("Products").doc(match.params.productId);
      try {
        var productsNew = await docRef.get().then((resp) => {
          setproducts(resp.data());
        });
      } catch (err) {
        console.log("Error getting documents", err);
      }
    })();
  }, []);

  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener(`click`, (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(".img-showcase img:first-child")
      .clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);
  return (
    <div className="card-wrapper-new">
      <div className="card-new">
        {/* Card Left  */}
        <div className="product-img">
          <div className="img-display">
            <div className="img-showcase">
              <img src={products.productImage} alt={products.productName} />
              <img src={products.productImage} alt={products.productName} />
              <img src={products.productImage} alt={products.productName} />
              <img src={products.productImage} alt={products.productName} />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <Link to="#" data-id="1">
                <img src={products.productImage} alt={products.productName} />
              </Link>
            </div>
            <div className="img-item">
              <Link to="#" data-id="2">
                <img src={products.productImage} alt={products.productName} />
              </Link>
            </div>
            <div className="img-item">
              <Link to="#" data-id="3">
                <img src={products.productImage} alt={products.productName} />
              </Link>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <img src={products.productImage} alt={products.productName} />
              </a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h2 className="product-title">{products.productName}</h2>
          <Link className="product-link" to="/shop">
            Visit the store
          </Link>
          <div className="product-rating">
            {rating.map((item, id) => {
              return <i className="fas fa-star"></i>;
            })}
            <span>5.0(20)</span>
          </div>
          <div className="product-price">
            <p className="last-price">
              Old Price: <span>$500</span>
            </p>
            <p className="new-price">
              New Price: <span>${products.productPrice}</span>
            </p>
          </div>
          <div className="product-detail">
            <h2>About this item:</h2>
            <p>{products.productDesc}</p>
            {products?.inStock == "Yes" ? (
              <div className="stock">
                <p>In Stock</p>
              </div>
            ) : (
              <div className="stock">
                <p>Not In Stock</p>
              </div>
            )}
            <div className="colors-container">
              {products?.Colors
                ? products.Colors.map((item, id) => {
                    return <button style={{ background: item }}></button>;
                  })
                : null}
            </div>
            <div className="sizes-container">
              {products?.Sizes
                ? products.Sizes.map((item, id) => {
                    return <button className="size-btn">{item}</button>;
                  })
                : null}
            </div>
          </div>
          <div className="purchase-info">
            <input type="number" min="0" value="1" />
            <button
              type="button"
              className="btn"
              onClick={() => addToCart(match.params.productId)}
            >
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
            <button type="button" className="btn">
              Compare
            </button>
          </div>

          <div className="social-links">
            <p>Share all: </p>
            <Link to="#">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-whatsapp"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-pinterest"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

//Storage
// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }

//Cloud Firestore
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2021, 1, 20);
//     }
//   }
// }
