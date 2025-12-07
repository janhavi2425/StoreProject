import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import StoreList from "./components/StoreList.jsx";
import Ratings from "./components/Ratings.jsx";

function App() {
  return (
    <div>
      <nav>
        <Link to="/login">Login</Link> {" "}
        <Link to="/signup">Signup</Link>{" "}
        <Link to="/stores">Stores</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/stores" element={<StoreList />} />
        <Route path="/ratings/:storeId" element={<Ratings />} />
      </Routes>
    </div>
  );
}

export default App;
