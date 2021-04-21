import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { db, storage } from "../../Database/firebase";
import "./Products.css";

const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [gender, setGender] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [productImage, setProductImage] = useState([]);
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [brands, setBrands] = useState("");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [inStock, setInStock] = useState("");

  const [products, setProducts] = useState([]);

  const [dropdownGender, setDropdownGender] = useState([]);
  const [dropdownCategory, setDropdownCategory] = useState([]);

  const shoeSizes = [
    {
      id: 1,
      size: 1,
    },
    {
      id: 2,
      size: 2,
    },
    {
      id: 3,
      size: 3,
    },
    {
      id: 4,
      size: 4,
    },
    {
      id: 5,
      size: 5,
    },
    {
      id: 6,
      size: 6,
    },
    {
      id: 7,
      size: 7,
    },
    {
      id: 8,
      size: 8,
    },
    {
      id: 9,
      size: 9,
    },
    {
      id: 10,
      size: 10,
    },
  ];
  const shoeColors = [
    {
      id: 1,
      color: "Red",
    },
    {
      id: 2,
      color: "White",
    },
    {
      id: 3,
      color: "Green",
    },
    {
      id: 4,
      color: "Black",
    },
    {
      id: 5,
      color: "Blue",
    },
  ];
  const shoeBrands = [
    {
      id: 1,
      brand: "Nike",
    },
    {
      id: 2,
      brand: "Adidas",
    },
    {
      id: 3,
      brand: "Reebok",
    },
    {
      id: 4,
      brand: "Woodland",
    },
    {
      id: 5,
      brand: "Gucci",
    },
  ];

  const handleSubmit = () => {
    if (
      productName === "" ||
      productDesc === "" ||
      productPrice === null ||
      gender === ""
    ) {
      alert("Kindly enter details");
    } else {
      db.collection("Products")
        .add({
          gender,
          productName,
          productDesc,
          productPrice,
          productImage,
          productCategory,
          colors,
          sizes,
          brands,
          inStock,
        })
        .then((res) => {
          console.log(res);
          alert("Product Added Successfully");
          setProductName("");
          setGender("");
          setproductCategory("");
          setProductImage([]);
          setProductDesc("");
          setProductPrice("");
          setBrands("");
          setColors([]);
          setSizes([]);
          setInStock("");
        })
        .catch((error) => {
          alert("Something went wrong");
          console.log(error);
        });
    }
  };
  const genderDatabase = () => {
    db.collection("Genders").onSnapshot((dropdownSnapshot) => {
      setDropdownGender(dropdownSnapshot.docs.map((doc) => doc.data()));
    });
  };
  const categoriesDatabase = () => {
    db.collection("Category").onSnapshot((dropdownSnapshot) => {
      setDropdownCategory(dropdownSnapshot.docs.map((doc) => doc.data()));
    });
  };

  const imageUpload = async (e) => {
    let image = e.target.files[0];
    const uploadTask = storage.ref("/images").child(image.name);
    await uploadTask.put(image);
    const imageUrl = await uploadTask.getDownloadURL();
    // var getUrl = imageUrl.splice(1);
    // console.log(getUrl);
    setProductImage(imageUrl);
  };

  const handleCheckboxChange = (event) => {
    let newArray = [...colors, event];
    if (colors.includes(event)) {
      newArray = newArray.filter((clr) => clr !== event);
    }
    setColors(newArray);
  };
  const handleSizeCheckboxChange = (event) => {
    let newArray = [...sizes, event];
    if (sizes.includes(event)) {
      newArray = newArray.filter((sizes) => sizes !== event);
    }
    setSizes(newArray);
  };
  const handleBrandRadiobuttonChange = (event) => {
    let newArray = [...brands, event];
    if (brands.includes(event)) {
      newArray = newArray.filter((sizes) => sizes !== event);
    }
    setBrands(newArray);
  };

  useEffect(() => {
    db.collection("Products").onSnapshot((snapshot) => {
      let products = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(products);
    });
    genderDatabase();
    categoriesDatabase();
  }, []);
  // console.log(products);
  return (
    <>
      <div className="container-fluid" style={{ marginTop: 50 }}>
        <div className="row">
          <Col sm={2}></Col>
          <Col sm={8}>
            <div className="form">
              <h2 style={{ textAlign: "center", marginBottom: 50 }}>
                Add Products to Database
              </h2>
              <label>Product Name</label>
              <input
                type="title"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Choose Gender</option>
                {dropdownGender.map((item, i) => (
                  <option key={i}>{item.gender}</option>
                ))}
              </select>

              <label>Product Category</label>
              <select
                value={productCategory}
                onChange={(e) => setproductCategory(e.target.value)}
              >
                <option>Choose Category</option>
                {dropdownCategory.map((item, i) => (
                  <option key={i}>{item.categoryName}</option>
                ))}
              </select>

              <label>Product Image</label>
              <input
                type="file"
                onChange={(e) => imageUpload(e)}
                className="file-upload"
              />
              <label>Product Description</label>
              <input
                type="text"
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
              />
              <label>Product Price</label>
              <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />

              <label>Brands</label>
              <select
                value={brands}
                onChange={(e) => setBrands(e.target.value)}
              >
                <option>Choose Brand</option>
                {shoeBrands.map((item, i) => (
                  <option key={i}>{item.brand}</option>
                ))}
              </select>

              <label>Shoe Colors</label>
              <div className="arrays">
                {shoeColors.map((color) => {
                  return (
                    <label>
                      <input
                        key={color.id}
                        type="checkbox"
                        value={color.color}
                        name="color"
                        onChange={(e) => handleCheckboxChange(e.target.value)}
                      />
                      {color.color}
                    </label>
                  );
                })}
              </div>
              <label>Shoe Sizes</label>
              <div className="arrays">
                {shoeSizes.map((size) => {
                  return (
                    <label>
                      <input
                        key={size.id}
                        type="checkbox"
                        value={size.size}
                        name="Sizes"
                        onChange={(e) =>
                          handleSizeCheckboxChange(e.target.value)
                        }
                      />
                      {size.size}
                    </label>
                  );
                })}
              </div>

              <label>Stock</label>
              <select
                value={inStock}
                onChange={(e) => setInStock(e.target.value)}
              >
                <option>Choose Option</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <button onClick={handleSubmit}>Submit</button>
            </div>
          </Col>
          <Col sm={2}></Col>
        </div>
        <div className="row">
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th>Product Category</th>

                  <th>Product Name</th>
                  <th>Product Description</th>
                  <th>Product Price</th>
                </tr>
                {products.length
                  ? products.map((item, i) => (
                      <tr key={i}>
                        <td>{item.gender}</td>

                        <td>{item.productName}</td>
                        <td className="desc">{item.productDesc}</td>
                        <td>{item.productPrice}</td>
                      </tr>
                    ))
                  : null}
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
