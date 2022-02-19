import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function (props) {
  const { pizza } = props;

  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addtocart() {
    // dispatch action add to cart which later on will be handeled by reducer
  }

  return (
    <div
      style={{ margin: "50px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          alt={pizza.name}
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px", borderRadius: "50%" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100">
          <p>Varients</p>
          <select
            className="mb-3"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100">
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Price : {pizza.prices[0][varient] * quantity} Rs</p>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>
            {" "}
            ADD TO CART
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {pizza.name} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid"
            style={{ height: "300px" }}
          />
          <br />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
