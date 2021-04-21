import React, { useEffect } from "react";
import { db } from "../../Database/firebase";
import { LocalDatabase } from "../../context/DataLayer";

const SearchResult = (props) => {
  const [{ products }, dispatch] = LocalDatabase();

  useEffect(() => {
    db.collection("Products").onSnapshot((snapshot) => {
      let dataProducts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch({
        type: "SET_PRODUCTS_FROM_DB",
        data: dataProducts,
      });
    });
  }, []);
  return (
    <>
      <div>
        {products.map((item, id) => {
          return <p key={id}>{item.productName}</p>;
        })}
      </div>
    </>
  );
};

export default SearchResult;
