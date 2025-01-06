import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    // Storing the user data in localStorage
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Extracting name and value from the event
    setInput({ ...input, [name]: value }); // Dynamically updating the state
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Register</h5>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name" // Added name attribute
                value={input.name}
                onChange={handleChange} // Corrected onChange handler
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username" // Added name attribute
                value={input.username}
                onChange={handleChange} // Corrected onChange handler
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email" // Added name attribute
                value={input.email}
                onChange={handleChange} // Corrected onChange handler
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password" // Added name attribute
                value={input.password}
                onChange={handleChange} // Corrected onChange handler
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
