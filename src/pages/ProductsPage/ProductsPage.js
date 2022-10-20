import "./ProductsPage.css";
import React, { useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import DeleteModal from "../../components/ModalComponents/DeleteModal/DeleteModal";
import UpdateModal from "../../components/ModalComponents/UpdateModal/UpdateModal";
import Alert from "@mui/material/Alert";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
  },
};

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [buttonType, setButtonType] = useState();
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDeleteButton = (e, post) => {
    e.preventDefault();
    setSelectedPost(post);
    openModal();
    setButtonType("delete");
  };
  const handleUpdateButton = (e, post) => {
    e.preventDefault();
    setSelectedPost(post);
    openModal();
    setButtonType("update");
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

  return (
    <>
      <div className="productsPageMainContainer">
        <Header />
        <h1>Products</h1>
        {loading && <div>Loading ...</div>}
        <div className="dataContainer">
          {!loading &&
            data.length > 1 &&
            data?.map((post) => {
              return (
                <div className="dataCard" key={post.id}>
                  <div className="cardContentContainer">
                    <div className="cardDataContainer">
                      <img id="dataPictures" src={post.picture} alt="" />
                      <span>{post.title}</span>
                      <span>{post.firstName}</span>
                      <span>{post.lastName}</span>
                    </div>
                    <div className="cardButtonContainer">
                      <button
                        id="updateBtn"
                        onClick={(e) => {
                          handleUpdateButton(e, post);
                        }}
                      >
                        Update
                      </button>
                      <button
                        id="deleteBtn"
                        onClick={(e) => {
                          handleDeleteButton(e, post);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <span>id: {post.id}</span>
                  </div>
                </div>
              );
            })}
          {!loading && <Footer />}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div>
          {buttonType === "delete" && (
            <DeleteModal
              selectedPost={selectedPost}
              closeModal={closeModal}
              setDeleteSuccess={setDeleteSuccess}
            />
          )}
          {buttonType === "update" && (
            <UpdateModal selectedPost={selectedPost} closeModal={closeModal} />
          )}
        </div>
      </Modal>
      {deleteSuccess && (
        <div className="alertSuccess">
          <Alert severity="success" color="success">
            Successfully deleted user
          </Alert>
        </div>
      )}
    </>
  );
};

export default ProductsPage;
