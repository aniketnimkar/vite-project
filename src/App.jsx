import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div>
          <img src="https://placehold.co/1200x400" className="img-fluid mt-4" />
        </div>
        <section>
          <div className="text-center mt-5">
            <h4>Shopie</h4>
            <p>Welcome to the Shopie application!</p>
            <button className="btn btn-primary">
              <NavLink className="btn btn-primary" to="/products">
                Browse Products
              </NavLink>{" "}
            </button>
          </div>
        </section>

        <section>
          <div className="text-center py-5">
            <h4>Trending</h4>
            <p>Checkout our trending products</p>

            <div className="row">
              <div className="col-md-4">
                <img src="https://placehold.co/300x300" />
              </div>
              <div className="col-md-4">
                <img src="https://placehold.co/300x300" />
              </div>
              <div className="col-md-4">
                <img src="https://placehold.co/300x300" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
