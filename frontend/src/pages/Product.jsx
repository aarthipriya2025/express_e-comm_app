import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStar, FaHeart } from "react-icons/fa";

const Product = () => {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
        setSelectedImage(res.data.images[0]);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Images */}
          <div>
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="flex gap-3 mt-4">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={product.images[0]}
                  alt={product.title}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div>
            <p className="text-sm text-gray-500">{product.category}</p>
            <Link to={`/product/${product._id}`}>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            </Link>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-gray-600 text-sm ml-2">(24 reviews)</span>
            </div>

            <p className="text-2xl font-semibold text-gray-900 mb-4">${product.price}</p>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <label className="font-medium">Quantity:</label>
              <div className="flex items-center border rounded">
                <button
                  className="px-3 py-1 border-r hover:bg-gray-100"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="px-3 py-1 border-l hover:bg-gray-100"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-black text-white py-1.5 sm:py-2 rounded hover:bg-gray-800 text-sm sm:text-base  px-6 transition">
                Add to Cart
              </button>
              <button className="flex items-center gap-2 border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                <FaHeart className="text-red-500" /> Wishlist
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
