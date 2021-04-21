import React, { useEffect, useState } from "react";
import { db } from "../../Database/firebase";
import "./Categories.css";

const Categories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = () => {
    if (categoryName == "") {
      alert("Kindly enter details");
    } else {
      db.collection("Categories")
        .add({
          categoryName,
        })
        .then((res) => {
          console.log(res);
          alert("Category Added Successfully");
          setCategoryName("");
        })
        .catch((error) => {
          alert("Something went wrong");
          console.log(error);
        });
    }
  };

  useEffect(() => {
    db.collection("Categories").onSnapshot((snapshot) => {
      let categories = snapshot.docs.map((doc) => doc.data());
      setCategories(categories);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="left-side-category">
          <div className="form">
            <h2 style={{ marginBottom: 50 }}>Add Categories</h2>
            <label>Category Name</label>
            <input
              type="title"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="right-side">
          <div className="categoryContainer">
            <h4>Categories</h4>
            <ol>
              {categories.length ? (
                categories.map((item, i) => <li>{item.categoryName}</li>)
              ) : (
                <h3>No Categories Yet </h3>
              )}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
