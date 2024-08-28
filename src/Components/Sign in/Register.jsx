import React, { useState } from "react";
import "./Sign-in.css";
import axios from "axios";

export default function Register() {
  let [userData, setUserData] = useState({
    fname: "",
    lname: "",
    password: "",
    email: "",
  });
  const getData = (e) => {
    let udata = { ...userData };
    udata[e.target.name] = e.target.value;
    setUserData(udata);
  };

  const stopReload = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/users", userData);
    } catch (e) {
      console.log(e.response.data);
    }
  };
  return (
    <div>
      <div className="container d-flex flex-column align-items-center mt-5 pt-5">
        <h1 className="text-white mb-4">Register </h1>
        <form onSubmit={stopReload} className="row g-3 w-75 text-white">
          <div className="col-md-6">
            <label htmlFor="inputFname4" className="form-label">
              First Name:
            </label>
            <input
              onChange={getData}
              type="text"
              name="fname"
              className="form-control"
              id="inputFname4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLname4" className="form-label">
              Last Name:
            </label>
            <input
              onChange={getData}
              type="text"
              name="lname"
              className="form-control"
              id="inputLname4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword" className="form-label">
              Password:
            </label>
            <input
              onChange={getData}
              type="password"
              name="password"
              className="form-control"
              id="inputPassword"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="inputemail" className="form-label">
              Email:
            </label>
            <input
              onChange={getData}
              type="email"
              name="email"
              className="form-control"
              id="inputemail"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-danger">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
