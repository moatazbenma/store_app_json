function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-8 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Logo / Brand */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold tracking-wide">MTZ STORE</h2>
          <p className="text-sm text-gray-200">Your trusted online shop since {new Date().getFullYear()}.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-yellow-300 transition">Home</a>
          <a href="#" className="hover:text-yellow-300 transition">Products</a>
          <a href="#" className="hover:text-yellow-300 transition">About</a>
          <a href="#" className="hover:text-yellow-300 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="#" className="hover:text-yellow-300 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 mt-6 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
