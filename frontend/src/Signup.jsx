import React, { useState } from 'react'

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    isverified: 1
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:7000/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Signup Successful");

        setUser({
          name: "",
          email: "",
          password: "",
          phonenumber: "",
          isverified: 1
        });
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">

      <div className="card p-4 shadow" style={{ width: "380px" }}>

        <h4 className="text-center mb-3 fw-bold">Signup</h4>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-2"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            placeholder="Phone Number"
            name="phonenumber"
            value={user.phonenumber}
            onChange={handleChange}
          />

          <button className="btn btn-success w-100 fw-bold">
            SIGN UP
          </button>

        </form>

      </div>
    </div>
  )
}

export default Signup