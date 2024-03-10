"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addtoCart } from "@/app/store/features/cart";
import { ToastContainer, toast } from "react-toastify";

const BestSellCardAddtoCart = ({ slug }: { slug: string }) => {
  // data calling
  const product = useAppSelector((state) => state.products).find(
    (val) => val.slug == slug
  );
  // add to cart
  const dispatch = useAppDispatch();
  // setting cart item
  const [cardItem, setCardItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image[0],
    slug: product?.slug,
    discount: product?.discount,
    price: product?.price,
    catogery: product?.catogery,
    size: product?.size[0],
    quantity: product?.quantity,
    color: product?.color[0],
  });
  // toast
  const notify = () =>
    toast.success("Product added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            onClick={() => dispatch(addtoCart(cardItem))}
            className="group bg-myBlackHead scroll-m-20 mt-2 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300 bottom-2 right-2 absolute"
          >
            <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[13rem] px-3 bg-myWhite">
          {/* size */}
          <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight ">
              Size
            </span>
            <div className="relative">
              <label className="form-control w-full max-w-xs">
                <select
                  onChange={(e) =>
                    setCardItem({ ...cardItem, size: e.target.value })
                  }
                  className="select"
                >
                  <option disabled selected>
                    Select Size
                  </option>
                  {product?.size.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* color */}
          <div className="flex mt-2">
            {/* color options start */}
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight ">
              Color
            </span>
            {product?.color.map((item: any, i: any) => (
              <button
                onClick={() => setCardItem({ ...cardItem, color: item })}
                key={i}
                className="border-2 border-gray-300 active:border-black focus:border-black ml-1 rounded-full w-5 h-5 focus:outline-none"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          {/* add to cart */}
          <div className="w-fit" onClick={notify}>
            <Button className="group w-full bg-myBlackHead scroll-m-20 mt-2 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300">
              <FaShoppingCart className="mr-2 h-3 w-3 group-hover:text-myOrange duration-300" />
              Add to Cart
            </Button>
          </div>
          {/* add to cart end */}
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default BestSellCardAddtoCart;
 