import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { db } from "../../Database/firebase";
import { LocalDatabase } from "../../context/DataLayer";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Popup.css";

const Popup = (props) => {
  // const [{ products }, dispatch] = LocalDatabase();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const inputEvent = (event) => {
    const SearchData = event.target.value;
    setSearchTerm(SearchData);
  };
  const { title, children, openPopup, setOpenPopup } = props;

  useEffect(() => {
    db.collection("Products").onSnapshot((snapshot) => {
      let NewProducts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(NewProducts);
    });
  }, []);

  return (
    <Dialog open={openPopup} className="popup-main-container">
      <DialogTitle>
        <div className="popup-title-container">
          <h6>Search</h6>
          <AiFillCloseCircle
            onClick={() => {
              setOpenPopup(false);
              setSearchTerm("");
            }}
            className="popup-close-button"
          />
        </div>
      </DialogTitle>
      <DialogContent dividers className="popup-content-container">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Start typing here.."
            value={searchTerm}
            onChange={inputEvent}
          />

          {searchTerm == "" ? (
            <></>
          ) : (
            products
              .filter((item) => {
                if (searchTerm == "") {
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
                return <p style={{ cursor: "pointer" }}>{item.productName}</p>;
              })
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
