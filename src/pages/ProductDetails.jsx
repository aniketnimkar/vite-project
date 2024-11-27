import React from "react";
import { products } from "./Products";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const productDetails = () => {
  const { productId } = useParams();
  console.log(productId);

  const selectedProduct = products.find((product) => product.id == productId);
  console.log(selectedProduct);
  return (
    <>
      <Header />
      <main className="container">
        <div className="card my-5 px-4 py-4">
          <div>
            <h2>Product Details</h2>
            <div className="row">
              <div className="col-md-3">
                <img className="my-3" src={selectedProduct.productImg1} />
              </div>
              <div className="col-md-3">
                <img className="my-3" src={selectedProduct.productImg2} />
              </div>
              <div className="col-md-3">
                <img className="my-3" src={selectedProduct.productImg3} />
              </div>
            </div>
            <p className="card-text">ID: {selectedProduct.id}</p>
            <p className="card-text">Name: {selectedProduct.name}</p>
            <p className="card-text">
              Description: {selectedProduct.description}
            </p>
            <p className="card-text">Price: INR {selectedProduct.price}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default productDetails;
