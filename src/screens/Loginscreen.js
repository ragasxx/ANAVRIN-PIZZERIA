import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  function login() {
    const user = { email, password };

    // dispatchEvent(loginUser(user));
    console.log(user);
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
            LOGIN
          </h2>
          <div>
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
            <button className="btn-register mt-2" onClick={login}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
