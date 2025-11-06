import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import './index.css';
import OrdersPage from './pages/OrdersPage.jsx';
import Products from './pages/Products.jsx';
import  Contact  from "./pages/Contact.jsx";
import About from "./pages/About.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/contact/" element={<Contact />} />
      <Route path="/about/" element={<About />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  </BrowserRouter>
);
