import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const dispatch = useDispatch();

  function register() {
    if (password != cpassword) {
      alert("PASSWORD NOT MATCHED");
    } else {
      const user = {
        name,
        email,
        password,
      };

      console.log("user credentials", user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
          <h2
            className="text-center mt-3"
            style={{
              fontSize: "32px",
              fontFamily: "cursive",
              marginBottom: "30px",
            }}
          >
            REGISTER
          </h2>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="form-control"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Your Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Password"
              required
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button className="btn-register mt-2" onClick={register}>
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
