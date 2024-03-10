"use client";

import React from "react";
import BestSellingCard from "./shared/bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const BestSelling = () => {
  const product = useAppSelector((state) => state.products);
  const bestSell = product.slice(0, 3);

  return (
    <section>
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-myBlackHead">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* best selling products */}
      <div className="flex flex-wrap justify-center gap-5">
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
            discount={0}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
