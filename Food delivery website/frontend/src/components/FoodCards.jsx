// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foodData from "../../FoodData.json"
import { Link, useNavigate } from "react-router-dom";

import axios from "axios"
const FoodCards = () => {
  const [foodItems,setFoodItems]=useState('')
  
  useEffect(() => {
  fetchData()
  },[])
  
  const fetchData = async() => {
    const  response =await axios.get("http://localhost:3000/api/menu-items")
    console.log(response.data)
    setFoodItems(response.data)
  }
    const navigate=useNavigate()
console.log(foodItems.recipes)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    const ClickHandler = (id) => {
       
        navigate(`food/${id}`)
  }
  console.log("hello")
  return (
    <div className="container mx-auto px-4 py-8">
      <p className='text-white text-2xl mb-4'>Food list</p>
          <Slider {...settings} className='mx-4'>
              
              {foodItems && foodItems.map((food) => (
      
          <div key={food.id} className="px-2 ">
                      <div className="relative">
                          <Link to={food.id} onClick={()=>ClickHandler(food.id)}>
              <div className="absolute inset-0  md:flex justify-center items-center bg-black bg-opacity-50 rounded-xl">
                <h1 className="font-bold text-xl text-white">{food.name}</h1>
              </div>
              <img
                src={food.image_url}
                className="w-full h-44 object-cover rounded-xl"
                alt={food.name}
                              />
                              </Link>
            </div>
                      </div>
                     
        ))}
      </Slider>
    
    </div>
  );
};

export default FoodCards;



  