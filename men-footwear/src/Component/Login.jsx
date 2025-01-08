import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (
        storedUser.email === input.email &&
        storedUser.password === input.password
      ) {
        navigate("/");
      } else {
        setError("Invalid Email or password");
      }
    } else {
      setError("No user found, please register first");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card" style={{ width: "38rem", height: "22rem" }}>
        <div className="card-body">
          <h3 className="card-title " 
          
          
          style={{ fontSize: "30px" }}>
            Login
          </h3>
          <form onSubmit={handleLogin} className=" mt-3">
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={input.email}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                style={{ width: "35rem", height: "3rem" }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={input.password}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                style={{ width: "35rem", height: "3rem" }}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="button1 d-flex  justify-content-between align-items-center ">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ fontSize: "20px" }}
              >
                Login
              </button>
              <Link
                to={"/register"}
                className="text-black-50"
                style={{ fontSize: "20px" }}
              >
                I Can't Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
