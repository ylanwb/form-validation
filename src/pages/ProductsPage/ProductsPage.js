import "./ProductsPage.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user?limit=10", {
        headers: { "app-id": "634752bc7580f70e4f699960" },
      })
      .then((response) => {
        setLoading(true);
        setTimeout(() => {
          setData(response.data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);
console.log(data)
  return (
    <div className="productsPageMainContainer">
      <h1>Products</h1>
      {loading && <div>Loading ...</div>}
      <div className="dataContainer">
        {!loading &&
          data.length > 1 &&
          data?.map((data) => {
            return (
              <div className="dataCard">

              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductsPage;
