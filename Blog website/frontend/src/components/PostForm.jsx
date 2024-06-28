// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; 

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
   
      await axios.post(`${API_URL}/posts`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/'); 
    } catch (error) {
      console.error('Error creating post:', error); 
    }
  };

  return (
    <div className="container mx-auto mt-8 px-20 flex justify-center"> 
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4 mx-auto">Create New Post</h1>
        <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="6"
            required
          ></textarea>
        </div>
        <div className="mb-4">
  <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
    Image
  </label>
  <input
    type="file"
    id="image"
    onChange={handleImageChange}
    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
  />
          </div>
          <div className="flex justify-center items-center"> <button type="submit" className="bg-blue-600 mx-auto text-white px-4 py-2 rounded-lg hover:bg-blue-700">Create Post</button></div>
       
      </form>
      </div>
    </div>
  );
};

export default PostForm;
