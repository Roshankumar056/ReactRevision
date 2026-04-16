import React, { useEffect, useState } from "react";
import axios from "axios";
import LoaderSpinner from "../components/LoaderSpinner";
import { useNavigate } from "react-router-dom";
import { Star, Heart } from "lucide-react";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories,setCategories]=useState([])
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [sort, setSort] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);

  useEffect(()=>{
        axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
        
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  },[])
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center  ">
        <LoaderSpinner />
      </div>
    );
  }
const filteredProducts =
  selectedCategory === "all"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });
  return (
    <>
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Left: Title */}
        <h1 className="text-2xl font-semibold">
          All Products ({products.length})
        </h1>

         <div className="flex gap-3">

    {/* Category Filter */}
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-400"
    >
      <option value="all">All Categories</option>
      {categories.map((cat) => (
        <option key={cat.slug} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>

    {/* Sort */}
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-400"
    >
      <option value="">Sort By</option>
      <option value="low">Price: Low → High</option>
      <option value="high">Price: High → Low</option>
      <option value="rating">Rating</option>
    </select>

  </div>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto p-4">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="relative shadow-lg rounded-xl overflow-hidden flex flex-col bg-white hover:shadow-2xl transition duration-300"
          >
            {/* 🔥 Discount Badge */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
              {Math.round(product.discountPercentage)}% OFF
            </span>

            {/* ❤️ Wishlist Icon */}
            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow z-10 hover:scale-110 transition">
              <Heart size={18} className="text-gray-600 hover:text-red-500" />
            </button>

            {/* Image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                {product.title}
              </h2>

              <p className="text-sm text-gray-500 mb-1">
                {product.brand} • {product.category}
              </p>

              {/* Price */}
              <p className="text-lg font-bold text-green-600 mb-2">
                ₹{product.price}
              </p>

              {/* ⭐ Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-sm text-gray-600 ml-1">
                  ({product.rating})
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={() => navigate(`/products/${product.id}`)}
                className="mt-auto bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
