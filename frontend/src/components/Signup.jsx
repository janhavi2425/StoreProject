import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", { name, email, password, role });
      alert("User registered!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="user">Normal User</option>
        <option value="owner">Store Owner</option>
        <option value="admin">Admin</option>
      </select><br/>
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
