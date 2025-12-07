import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    API.get("/stores")
      .then(res => setStores(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Stores</h2>
      <ul>
        {stores.map(store => (
          <li key={store.id}>
            {store.name} - {store.address} | <Link to={`/ratings/${store.id}`}>Ratings</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoreList;
