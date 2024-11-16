import React from "react";
import Data from "../Data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopPick = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }
  
  return (
    <div className='mx-auto my-[60px] px-[30px] w-[100%]'>
    <h1 className="text-4xl font-bold text-center py-[1rem]">What's on your mind?</h1>
    <Slider {...settings}>
    {
      Data.map(item => {
      return (
      <div className='w-[100%] bg-white' key={item.id}>
      <div className='mx-auto my-0 text-center font-semibold'>
      <h3>{item.title}</h3>
      <h4>Price: {item.price}৳</h4>
      </div>
      <div className='w-[150px] h-[150px] rounded-[50%] mx-auto my-0'>
      <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-[50%] border-[3px]"/>
      </div>
      <button className='text-white bg-black text-xl rounded block mx-auto my-[3px] p-[0.4rem] hover:text-[#f24] hover:bg-white'>Order Now</button>
      </div>
      )
      })
    }
    </Slider>
    </div>
    )
}

export default TopPick;
