import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white text-center py-16 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Our Products
        </h1>
        <p className="text-indigo-100 mt-3 text-lg">
          Browse our complete collection and find your next favorite item.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        {products.length === 0 ? (
          <p className="text-center text-gray-500 animate-pulse">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(p => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={p.image || 'https://via.placeholder.com/300x200?text=Product+Image'}
                    alt={p.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {p.name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2 min-h-[40px]">
                    {p.description || "High-quality product with excellent performance."}
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <span className="text-2xl font-bold text-indigo-600">${p.price}</span>
                    <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full font-semibold group-hover:bg-indigo-600 group-hover:text-white transition">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
