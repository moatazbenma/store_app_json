import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />

      {/* Spacer to offset fixed navbar height */}
      <div className=""></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white text-center py-20 shadow-inner">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Discover the <span className="text-yellow-300">Best Tech Deals</span>
        </h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Shop top-quality gadgets and accessories at unbeatable prices. Fast shipping. Trusted products. Guaranteed satisfaction.
        </p>
        <Link
          to="/products"
          className="inline-block mt-8 bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Browse Products
        </Link>
      </section>

      {/* Product Grid */}
      <div className="p-10 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">
           Featured Products
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 animate-pulse">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
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

      <Footer />
    </>
  );
}

export default App;
