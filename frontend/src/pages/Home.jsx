import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.jpg";
import bgImg from "../assets/transparent_bg.jpg";
import blazer from "../assets/blazer.jpg";
import ratings from "../assets/ratings.jpg";
import Footer from "../components/Footer";

const reviews = [
  { name: "Anjali R.", text: "Amazing quality! The product was just as described and delivery was super fast.", rating: 5 },
  { name: "Rahul M.", text: "Very stylish and comfortable. Definitely worth the price!", rating: 4 },
  { name: "Sofia K.", text: "Customer support was helpful and the checkout process was smooth.", rating: 5 },
  { name: "David P.", text: "Good overall, but I wish the packaging was a bit better.", rating: 3 },
  { name: "Meera S.", text: "Love shopping here! Always find something new and exciting.", rating: 5 },
];

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [currentReview, setCurrentReview] = useState(0);

  // Fetch featured products
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/featured");
        setFeaturedProducts(res.data);
      } catch (err) {
        console.error("Error fetching featured products:", err);
      }
    };
    fetchFeatured();
  }, []);

  // Update visibleCount on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex + visibleCount < featuredProducts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen mt-15">
        <img src={heroImg} alt="hero" className="w-full h-full object-cover brightness-30" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Everything You Want, One Click Away
          </h1>
          <p className="text-white text-base sm:text-lg md:text-2xl mb-8 leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl">
            Discover items that make your daily life more comfortable, stylish,
            and enjoyable, all thoughtfully chosen to fit seamlessly into your routine.
          </p>
          <button className="bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition">
            Let’s Go Shopping!
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <div className="relative">
          <button onClick={handlePrev} className="absolute -left-2 sm:-left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10">
            ◀
          </button>
          <div className="flex justify-center gap-4 sm:gap-6 overflow-hidden text-center">
            {featuredProducts.slice(startIndex, startIndex + visibleCount).map((product) => (
              <div key={product._id} className="bg-white shadow-lg rounded-lg p-3 sm:p-4 w-40 sm:w-52 md:w-60 flex-shrink-0">
                <img src={product.images[0]} alt={product.title} className="w-full h-32 sm:h-40 md:h-40 object-cover rounded-md mb-3 sm:mb-4" />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button className="mt-2 sm:mt-3 w-full bg-black text-white py-1.5 sm:py-2 rounded hover:bg-gray-800 text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10">
            ▶
          </button>
        </div>
      </section>

      {/* Blazer Section */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
        <div className="w-full h-full bg-fixed bg-center bg-cover brightness-20 rounded-lg" style={{ backgroundImage: `url(${bgImg})` }}></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
          <img src={blazer} alt="blazer" className="w-64 sm:w-72 md:w-80 lg:w-96 max-h-[350px] h-auto rounded shadow-lg object-contain" />
          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-white">Trending Blazers</h2>
          <button className="mt-3 bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Trending Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Trending Products
        </h2>
        <div className="relative">
          <button onClick={handlePrev} className="absolute -left-2 sm:-left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10">
            ◀
          </button>
          <div className="flex justify-center gap-4 sm:gap-6 overflow-hidden text-center">
            {featuredProducts.slice(startIndex, startIndex + visibleCount).map((product) => (
              <div key={product._id} className="bg-white shadow-lg rounded-lg p-3 sm:p-4 w-40 sm:w-52 md:w-60 flex-shrink-0">
                <img src={product.images[0]} alt={product.title} className="w-full h-32 sm:h-40 md:h-40 object-cover rounded-md mb-3 sm:mb-4" />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button className="mt-2 sm:mt-3 w-full bg-black text-white py-1.5 sm:py-2 rounded hover:bg-gray-800 text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10">
            ▶
          </button>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
        <div className="w-full h-full bg-fixed bg-center bg-cover brightness-20 rounded-lg" style={{ backgroundImage: `url(${ratings})` }}></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold mb-8" style={{ fontSize: "60px" }}>
            What Our Customers Say ⭐
          </h1>
          <div className="relative w-full max-w-3xl mx-auto">
            <button onClick={handlePrevReview} className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 hover:bg-gray-800 text-white p-2 rounded-full z-10">
              ◀
            </button>
            <div className="bg-white/10 backdrop-blur-md p-12 rounded-lg shadow-lg text-white">
              <p className="italic mb-4 text-2xl">"{reviews[currentReview].text}"</p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: reviews[currentReview].rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                {Array.from({ length: 5 - reviews[currentReview].rating }).map((_, i) => (
                  <span key={i} className="text-gray-400 text-xl">★</span>
                ))}
              </div>
              <h4 className="font-bold text-2xl">{reviews[currentReview].name}</h4>
            </div>
            <button onClick={handleNextReview} className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 hover:bg-gray-800 text-white p-2 rounded-full z-10">
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
