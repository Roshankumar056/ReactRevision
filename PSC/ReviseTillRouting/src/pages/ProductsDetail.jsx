import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderSpinner from "../components/LoaderSpinner";

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) return <div><LoaderSpinner/></div>

  return (
<div className="max-w-6xl mx-auto p-6">
  <div className="grid md:grid-cols-2 gap-8 bg-white shadow-xl rounded-2xl overflow-hidden">

    {/* 🔥 Left: Image Gallery */}
    <div className="p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-80 object-contain rounded-lg mb-4"
      />

      <div className="flex gap-2 overflow-x-auto">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="h-20 w-20 object-cover rounded-lg border hover:scale-105 transition"
          />
        ))}
      </div>
    </div>

    {/* 🔥 Right: Product Info */}
    <div className="p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {product.title}
      </h1>

      <p className="text-gray-500 mb-4">{product.description}</p>

      {/* Price */}
      <div className="mb-4">
        <p className="text-2xl font-bold text-green-600">
          ₹{product.price}
        </p>
        <p className="text-sm text-red-500">
          {product.discountPercentage}% OFF
        </p>
      </div>

      {/* Info */}
      <div className="space-y-1 text-sm text-gray-600 mb-4">
        <p>⭐ Rating: {product.rating}/5</p>
        <p>📦 Stock: {product.stock}</p>
        <p>🏷 Brand: {product.brand}</p>
        <p>📂 Category: {product.category}</p>
        <p>🆔 SKU: {product.sku}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {product.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-auto">
        <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl">
          Add to Cart
        </button>
        <button className="flex-1 border py-3 rounded-xl hover:bg-gray-100">
          Buy Now
        </button>
      </div>
    </div>
  </div>

  {/* 🔥 Extra Details */}
  <div className="mt-8 bg-white p-6 rounded-xl shadow">
    <h2 className="text-xl font-semibold mb-4">Product Details</h2>

    <div className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">
      <p>⚖ Weight: {product.weight}g</p>
      <p>📏 Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}</p>
      <p>🛡 Warranty: {product.warrantyInformation}</p>
      <p>🚚 Shipping: {product.shippingInformation}</p>
      <p>📦 Availability: {product.availabilityStatus}</p>
      <p>🔁 Return Policy: {product.returnPolicy}</p>
    </div>
  </div>

  {/* 🔥 Reviews Section */}
  <div className="mt-8 bg-white p-6 rounded-xl shadow">
    <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

    <div className="space-y-4">
      {product.reviews.map((review, i) => (
        <div key={i} className="border-b pb-3">
          <p className="font-semibold">{review.reviewerName}</p>
          <p className="text-yellow-500">⭐ {review.rating}/5</p>
          <p className="text-gray-600">{review.comment}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default ProductsDetail;