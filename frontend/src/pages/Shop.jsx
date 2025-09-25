import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHeart } from "react-icons/fa";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // 3 rows × 4 products

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    if (sortOption === "latest")
      return new Date(b.createdAt) - new Date(a.createdAt);
    return 0; // popularity (default)
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Shop
        </h1>

        {/* Showing results & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <p className="text-gray-600 mb-4 sm:mb-0">
            Showing {currentProducts.length} of {products.length} results
          </p>
          <select
            className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="popularity">Sort by popularity</option>
            <option value="latest">Sort by latest</option>
            <option value="lowToHigh">Sort by price: Low to High</option>
            <option value="highToLow">Sort by price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition flex flex-col"
            >
              <div className="relative">
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-md mb-3 cursor-pointer"
                  />
                </Link>

                {/* Wishlist Icon */}
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <FaHeart className="text-gray-600 hover:text-red-500" />
                </button>
              </div>

              <p className="text-sm text-gray-500">{product.category}</p>

              <Link to={`/product/${product._id}`}>
                <h2 className="text-lg font-semibold text-gray-800 cursor-pointer">
                  {product.title}
                </h2>
              </Link>

              <p className="text-gray-900 font-bold">${product.price}</p>

              {/* Add to Cart Button */}
              <button className="mt-3 w-full sm:mt-3 bg-black text-white py-1.5 sm:py-2 rounded hover:bg-gray-800 text-sm sm:text-base">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
