import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📦 Orders History</h1>
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">← Back to Store</Link>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white shadow-md p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Order ID: {order.id}</span>
                <span className="text-gray-600 text-sm">{new Date(order.date).toLocaleString()}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700">
                {order.items.map((item, i) => (
                  <li key={i}>{item.name} — {item.qty || 1} × ${item.price}</li>
                ))}
              </ul>
              <div className="text-right font-semibold text-blue-600 mt-2">Total: ${order.total}</div>
              <div className="text-right text-sm text-gray-500">User: {order.user}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
