import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // const [searchQuery, setData] = useState([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1>Products</h1>
      <ul>
        {data.map((item) => (
          <>
            <li key={item.id}>
              {item.title}

              <img src={item.images[0]} alt="image" width={100} height={100} />
              <img src={item.images[1]} alt="image" width={100} height={100} />
              <img src={item.images[2]} alt="image" width={100} height={100} />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
