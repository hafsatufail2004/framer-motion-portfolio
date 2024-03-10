"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellingCard from "./shared/bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const FeatureProducts = () => {
  // my data
  const bestSell = useAppSelector((state) => state.products.slice(0, 10));

  // carousel setting
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
       
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        },
      },
    ],
  };

  return (
    <div className="mt-[100px] mb-[25px]">
      {/* headivg */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-myBlackHead">
          Featured Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* carousel components */}
      <Slider {...settings}>
        {bestSell.map((items: any, i) => (
          <BestSellingCard 
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            catogery={items.catogery}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </Slider>
    </div>
  );
};

export default FeatureProducts;
