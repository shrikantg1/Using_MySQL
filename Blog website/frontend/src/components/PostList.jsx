// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { format } from 'date-fns'; 

const API_URL = import.meta.env.VITE_API_URL;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch posts. Please try again later.');
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`${API_URL}/posts/${postId}`);
    
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      setError('Failed to delete post. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto mt-8 p-4  ">
      <h1 className="text-3xl font-bold mb-4 p-4">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length===0 ? <h1 className='mx-auto text-6xl text-gray-500 opacity-30'>Create post..</h1>
: posts.map((post) => (
             <div key={post.id} className="max-w-sm bg-white border w-[80%]  border-gray-200 rounded-2xl  dark:bg-gray-800 dark:border-gray-700">
      <h1>
        <div className="flex justify-end items-end m-2"><MdDeleteForever onClick={() => handleDelete(post.id)} className='text-2xl text-red-500 cursor-pointer  flex' /></div>
      <Link to={`/post/${post.id}`} className="">

        <div className="flex justify-center items-center">
          
                  {post.image && <img src={`${post.image}`} alt={post.title} className="mb- max-w-full h-40 w-52" />}
                </div>
    </Link>
    </h1>
    <Link to={`/post/${post.id}`} className=" " key={post.id}>
  <div className="p-2">
    <p>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><div className="flex justify-between items-center mx-4 p-2">
              <h2 className="text-xl font-semibold mb-1 text-blue-600">{post.title}</h2>
              
            </div></h5>
    </p>
   
   
      </div>
      </Link>
</div>

      
        ))}
      </div>
    </div>
  );
};

export default PostList;
