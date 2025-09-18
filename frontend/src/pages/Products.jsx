import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            {item.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`product-${index}`}
                width={100}
                height={100}
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
