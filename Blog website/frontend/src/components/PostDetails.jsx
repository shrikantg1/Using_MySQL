// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

const API_URL = import.meta.env.VITE_API_URL;

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch post. Please try again later.');
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);
  
  if (loading) return <div className="flex justify-center items-center h-screen text-xl text-gray-600">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-xl text-red-600">{error}</div>;
  if (!post) return <div className="flex justify-center items-center h-screen text-xl text-gray-600">Post not found</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          {post.image && (
            <div className="flex justify-center items-center  ">
            <img
              src={post.image}
              alt={post.title}
              className="w-[40%] h-full object-cover p-6 "
              />
              </div>
          )}
          <div className="p-3 sm:p-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{post.content}</p>
            <div className="flex items-center text-sm text-gray-500">
            <p className=' text-gray-500'>{format(new Date(post.created_at), 'MMMM dd, yyyy')}</p> 
              {post.author && <span>by {post.author}</span>}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostDetail;