import "./ProductsPage.css";
import React, { useEffect } from "react";
import axios from "axios";
// import Modal from "react-modal";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { UpdateModal } from "../../components/ModalComponents/UpdateModal";
import { DeleteModal } from "../../components/ModalComponents/DeleteModal"

// Modal.setAppElement("#")

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  const handleUpdateButton = (id) => {
    console.log({"update post id" : id});
  };
  const handleDeleteButton = (id) => {
    console.log({"delete post id" : id});
  };

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
  console.log(data);
  return (
    <div className="productsPageMainContainer">
      <Header />
      <h1>Products</h1>
      {loading && <div>Loading ...</div>}
      <div className="dataContainer">
        {!loading &&
          data.length > 1 &&
          data?.map((data) => {
            return (
              <div className="dataCard">
                <div className="cardContentContainer">
                  <div className="cardDataContainer">
                    <img id="dataPictures" src={data.picture} />
                    <span>{data.title}</span>
                    <span>{data.firstName}</span>
                    <span>{data.lastName}</span>
                  </div>
                  <div className="cardButtonContainer">
                    <button
                      id="updateBtn"
                      onClick={() => {
                        handleUpdateButton(data.id);
                      }}
                    >
                      Update
                    </button>
                    <button
                      id="deleteBtn"
                      onClick={() => {
                        handleDeleteButton(data.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <span>id: {data.id}</span>
                </div>
              </div>
            );
          })}
          {!loading && <Footer />}
      </div>
    </div>
  );
};

export default ProductsPage;
