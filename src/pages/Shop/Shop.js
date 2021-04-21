import React, { useEffect, useState } from "react";
import "./Shop.css";
import { db } from "../../Database/firebase";
import { LocalDatabase } from "../../context/DataLayer";
import bg from "../../images/Banners/shop-bg.jpg";

import { IconContext } from "react-icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
// import SearchResult from "../../components/SearchResult/SearchResult";
import HeadingBanner from "../../components/HeadingBanner/HeadingBanner";

const Shop = () => {
  const [{ products }, dispatch] = LocalDatabase();
  const [gender, setGender] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allP, setAllP] = useState([]);

  const categories = [
    {
      brandNames: [
        { bName: "Nike" },
        { bName: "Adidas" },
        { bName: "Reebok" },
        { bName: "Gucci" },
        { bName: "Woodland" },
      ],
      prices: [
        { price: "Less than $" },
        { price: "$50-$100" },
        { price: "$100-$150" },
        { price: "$150-$200" },
        { price: "$200-$250" },
        { price: "$250-$300" },
      ],
      colors: [
        { color: "Mistyrose" },
        { color: "Red" },
        { color: "BLue" },
        { color: "Yellow" },
        { color: "Green" },
        { color: "Pink" },
      ],
      sizes: [{ size: "7" }, { size: "7.5" }, { size: "8" }, { size: "9" }],
    },
  ];

  const [clicked, setClicked] = useState(true);

  const addToCart = (i) => {
    console.log(i);
    dispatch({
      type: "ADD_TO_CART",
      proId: i,
    });
  };

  const toggle = (index) => {
    if (clicked === index) {
      //if category opens then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const inputEvent = (event) => {
    const SearchData = event.target.value;
    setSearchTerm(SearchData);
  };

  const setGenders = (value) => {
    setAllP(
      products.filter(function (allPrdcts) {
        return allPrdcts.gender === value;
      })
    );
    console.log(allP);
  };

  const setCategories = (cat) => {
    console.log(cat);
    setAllP(
      products.filter(function (catProducts) {
        return catProducts.productCategory === cat;
      })
    );
    console.log(allP);
  };

  const setBrands = (brand) => {
    console.log(brand);
    setAllP(
      products.filter(function (brandNames) {
        return brandNames.brands === brand;
      })
    );
    console.log(allP);
  };

  const setColors = (color) => {
    console.log(color);
    setAllP(
      products.filter(function (colorNames) {
        return colorNames.colors[0] === color;
      })
    );
    console.log(allP);
  };
  const setPrices = (price) => {
    setAllP(
      products.filter(function (prices) {
        return prices.productPrice === price;
      })
    );
    console.log(allP);
  };

  const setSizes = (size) => {
    let a;
    allP.map((val) => {
      a = val.sizes;
    });
    console.log(a);
  };

  useEffect(() => {
    db.collection("Genders").onSnapshot((dropdownSnapshot) => {
      setGender(dropdownSnapshot.docs.map((doc) => doc.data()));
    });
    db.collection("Category").onSnapshot((dropdownSnapshot) => {
      setCategory(dropdownSnapshot.docs.map((doc) => doc.data()));
    });
    setAllP(products);
  }, []);
  return (
    <div>
      <HeadingBanner title="Shop" image={bg} />
      <div className="content-collection-page">
        <div className="container-fluid my-container">
          <div className="row" style={{ marginLeft: 50, marginRight: 50 }}>
            <div className="col-xxl-3 col-lg-3 col-12">
              <div className="sidebar sidebar-left">
                <div className="widget widget-category">
                  <h2 className="widget-title">Categories</h2>
                  <div className="widget-content">
                    <IconContext.Provider
                      value={{ color: "#695afd", size: "18px" }}
                    >
                      <div className="new-ul">
                        <ul className="product-categories">
                          {/********************************** Types **********************************/}
                          <li className="cat-item">
                            <i></i>
                            <p>Footwears</p>
                            {category.map((category, idnew) => {
                              return (
                                <>
                                  {clicked === 2 ? (
                                    <div id="toggle-tab-content" key={2}>
                                      <ul className="toggle-ul">
                                        <li>
                                          <Link
                                            to="#"
                                            onClick={() =>
                                              setCategories(
                                                category.categoryName
                                              )
                                            }
                                          >
                                            {category.categoryName}
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  ) : null}
                                </>
                              );
                            })}
                            <span>
                              {clicked === 2 ? (
                                <AiOutlineMinus
                                  className="toggle-icon"
                                  onClick={() => toggle(2)}
                                />
                              ) : (
                                <AiOutlinePlus
                                  className="toggle-icon"
                                  onClick={() => toggle(2)}
                                />
                              )}
                            </span>
                          </li>
                        </ul>
                        <ul className="product-categories">
                          {/********************************** Gender **********************************/}
                          <li className="cat-item">
                            <i></i>
                            <p>Gender</p>
                            {gender.map((gender, idnew) => {
                              return (
                                <>
                                  {clicked === 1 ? (
                                    <div id="toggle-tab-content" key={1}>
                                      <ul className="toggle-ul">
                                        <li>
                                          <Link
                                            to="#"
                                            onClick={() =>
                                              setGenders(gender.gender)
                                            }
                                          >
                                            {gender.gender}
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  ) : null}
                                </>
                              );
                            })}
                            <span>
                              {clicked === 1 ? (
                                <AiOutlineMinus
                                  className="toggle-icon"
                                  onClick={() => toggle(1)}
                                />
                              ) : (
                                <AiOutlinePlus
                                  className="toggle-icon"
                                  onClick={() => toggle(1)}
                                />
                              )}
                            </span>
                          </li>
                        </ul>
                        <ul className="product-categories">
                          {/********************************** Brands **********************************/}
                          <li className="cat-item">
                            <i></i>
                            <p>Brands</p>
                            <div id="toggle-tab-content" key={3}>
                              <ul className="toggle-ul">
                                {categories.map((item, id) => {
                                  return item.brandNames.map((bName, id) => {
                                    return clicked === 3 ? (
                                      <li key={id}>
                                        <Link
                                          to="#"
                                          onClick={() => setBrands(bName.bName)}
                                        >
                                          {bName.bName}
                                        </Link>
                                      </li>
                                    ) : null;
                                  });
                                })}
                              </ul>
                            </div>
                            <span>
                              {clicked === 3 ? (
                                <AiOutlineMinus
                                  className="toggle-icon"
                                  onClick={() => toggle(3)}
                                />
                              ) : (
                                <AiOutlinePlus
                                  className="toggle-icon"
                                  onClick={() => toggle(3)}
                                />
                              )}
                            </span>
                          </li>
                        </ul>
                        {/********************************** PRICES **********************************/}
                        <div>
                          <h2>Prices</h2>
                          <ul>
                            {categories.map((item, id) => {
                              return item.prices.map((pri, id) => {
                                return (
                                  <li onClick={() => setPrices(pri.price)}>
                                    {pri.price}
                                  </li>
                                );
                              });
                            })}
                          </ul>
                        </div>
                      </div>
                    </IconContext.Provider>
                    {/********************************** COLORS **********************************/}
                    <div className="sidebar-tag filter color tags">
                      <div className="widget">
                        <h2>Shop By Color</h2>
                        <div className="widget-content">
                          <ul>
                            {categories.map((item, id) => {
                              return item.colors.map((clr, id) => {
                                return (
                                  <div className="color-container" key={id}>
                                    <div
                                      className="color-circle"
                                      style={{
                                        background: clr.color,
                                        marginTop: 10,
                                      }}
                                    />
                                    <li
                                      style={{
                                        textTransform: "capitalize",
                                        marginTop: 10,
                                        marginLeft: 10,
                                      }}
                                      onClick={() => setColors(clr.color)}
                                    >
                                      {clr.color}
                                    </li>
                                  </div>
                                );
                              });
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/********************************** SIZES **********************************/}
                    <div className="sidebar-tag filter color tags">
                      <div className="widget">
                        <h2>Shop By Size</h2>
                        <div className="widget-content">
                          <ul style={{ display: "flex", flexDirection: "row" }}>
                            {categories.map((item, id) => {
                              return item.sizes.map((sizes, id) => {
                                return (
                                  <div className="size-container" key={id}>
                                    <li
                                      style={{
                                        cursor: "pointer",
                                        marginTop: 0,
                                        paddingLeft: 0,
                                      }}
                                      onClick={() => setSizes(sizes.size)}
                                    >
                                      {sizes.size}
                                    </li>
                                  </div>
                                );
                              });
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-lg-9 col-12">
              <div className="searchbar">
                <input
                  type="text"
                  placeholder="Search Products"
                  value={searchTerm}
                  onChange={inputEvent}
                />

                {searchTerm === "" ? (
                  <></>
                ) : (
                  products
                    .filter((item) => {
                      if (searchTerm === "") {
                        return item;
                      } else if (
                        item.productName
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return item;
                      }
                    })
                    .map((item, id) => {
                      return <p>{item.productName}</p>;
                    })
                )}
              </div>
              <div className="products-container">
                <div className="products-cards">
                  {allP.map((item, id) => {
                    return (
                      <div className="el-wrapper-new">
                        <div className="box-up-new">
                          <img
                            className="img-new"
                            src={item.productImage}
                            alt={item.productName}
                          />
                          <div className="img-info">
                            <div className="info-inner">
                              {/* <span className="p-name">{item.productName}</span> */}
                              <Link
                                to={`/product/${item.id}`}
                                className="p-name"
                              >
                                {item.productName}
                              </Link>
                              <span className="p-company">Adidas</span>
                            </div>
                            <div className="a-size">
                              Available sizes :{" "}
                              <span className="size">S , M , L , XL</span>
                            </div>
                          </div>
                        </div>

                        <div className="box-down-new">
                          <div className="h-bg">
                            <div className="h-bg-inner"></div>
                          </div>
                          <Link to="#" className="cart-new">
                            <span className="price-new">
                              ${item.productPrice}
                            </span>
                            <span className="add-to-cart-new">
                              <span
                                className="txt"
                                onClick={() => addToCart(item.id)}
                              >
                                Add to cart
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
