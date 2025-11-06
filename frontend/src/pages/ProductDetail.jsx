import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product)
    return (
      <div className="flex items-center justify-center h-screen text-lg text-gray-500 animate-pulse">
        Loading product details...
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white text-center py-16 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          {product.name}
        </h1>
        <p className="text-indigo-100 mt-3 text-lg">
          Premium Quality · Fast Shipping · Satisfaction Guaranteed
        </p>
      </div>

      {/* Product Content */}
      <div className="max-w-6xl mx-auto mt-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image || 'https://via.placeholder.com/500x400?text=Product+Image'}
            alt={product.name}
            className="rounded-2xl shadow-lg w-full max-w-md object-cover transform hover:scale-105 transition duration-500 ease-out"
          />
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description || "This high-quality product offers excellent performance and reliability for your daily needs."}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-extrabold text-indigo-600">
              ${product.price}
            </span>
            <button className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              🛒 Add to Cart
            </button>
          </div>

          <Link
            to="/"
            className="inline-block mt-8 text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
          >
            ← Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
