import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/add-to-cart');
        setCartItems(response.data);
        console.log(response.data)
      calculateTotalPrice(response.data);

    } catch (error) {
      console.error('Error fetching cart items:', error);
     
    }
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => {
      const price = parseFloat(item.price) || 0;
      return acc + price;
    }, 0);
    setTotalPrice(total);
  };

  const deleteHandler = async (itemId) => {
  try {
    await axios.delete(`http://localhost:3000/api/cart/${itemId}`);
   
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== itemId);
      calculateTotalPrice(updatedItems);
      return updatedItems;
    });
  } catch (error) {
    console.error('Error deleting item:', error);
  
  }
};


  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Cart Items</h2>
      <div className="container mx-auto p-4 h-full flex justify-center">
        <div className="space-y-4 flex-col w-96">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border rounded-lg p-4 shadow-sm bg-white justify-between">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Price: ₹ {item.price}</p>
                </div>
              </div>
              <button onClick={() => deleteHandler(item.id)}>Delete</button>
            </div>
          ))}
          <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
            <p className="text-xl font-bold text-center">
              Total: ₹ {typeof totalPrice === 'number' ? totalPrice.toFixed(2) : '0.00'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
