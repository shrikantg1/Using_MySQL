// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
const FoodDetails = () => {
  const [menuItem, setMenuItem] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchMenuItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/menu-items/${id}`);
        console.log(response.data);
        setMenuItem(response.data[0]);
      } catch (error) {
        console.error('Error fetching menu item:', error);
      }
    };

    fetchMenuItem();
  }, [id]);
 const addToCart = async () => {
   try {
     const response = await axios.post('http://localhost:3000/api/add-to-cart', {
       itemId: menuItem.id,
       name:menuItem.name,
       image:menuItem.image_url,
       price:menuItem.price,
      });
      toast.success("Item added to cart!");
     console.log(response.data); 
 
   } catch (error) {
     toast.error("hello")
      console.error('Error adding to cart:', error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen mt-12 md:mt-2 bg-gray-100">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full">
        <img
          src={menuItem.image_url}
          className="w-full h-64 p-4 rounded-xl object-cover"
         
        />
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-800">{menuItem.name}</h1>
            <h2 className="text-lg font-semibold text-gray-600">{menuItem.price} ₹</h2>
          </div>
          <p className="text-gray-600 mb-6">{menuItem.description}</p>
          <div className="flex justify-end">
            <button onClick={addToCart} className="bg-violet-500 px-4 py-2 text-white rounded-lg hover:bg-violet-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;