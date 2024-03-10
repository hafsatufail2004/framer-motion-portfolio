"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  addItemToCart,
  delItem,
  subtractCart,
} from "@/app/store/features/cart";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => (
          <div key={i} className="flex px-10 py-3">
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="w-[120px] h-[120px]"
            />

            {/* some info */}
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                {/* title */}
                <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
                  {item.title}
                </h2>

                {/* size */}
                <p className="mt-2 leading-none line-clamp-1 font-semibold text-myBlackHead/80">
                  <span>Size:&nbsp;{item.size}</span>
                </p>

                {/* color */}
                <p className="mt-2 leading-none line-clamp-1 font-semibold text-myBlackHead/80">
                  <span>
                    Color:&nbsp;
                    <button
                      className="border-2 border-gray-300 active:border-none focus:border-none  rounded-full w-[15px] h-[15px] focus:outline-none"
                      style={{ backgroundColor: item.color }}
                    />
                  </span>
                </p>

                {/* quantity */}
                <div className=" mt-2 flex items-center">
                  <Button
                    onClick={() => dispatch(addItemToCart(item))}
                    className="group   text-myWhite hover:text-myBlackHead bg-myBlackHead hover:bg-myWhite w-fit h-fit text-sm duration-300"
                  >
                    <FaPlus className="h-2 w-2 group-hover:text-myBlackHead" />
                  </Button>
                  <div className="mx-2 scroll-m-2- text-sm font-semibold tracking-tight text-myBlackHead">
                    {item.quantity}
                  </div>
                  <Button
                    onClick={() => dispatch(subtractCart(item))}
                    className="group text-myWhite hover:text-myBlackHead bg-myBlackHead hover:bg-myWhite w-fit h-fit  text-sm duration-300"
                  >
                    <FaMinus className="h-2 w-2 group-hover:text-myBlackHead" />
                  </Button>
                </div>

                {/* price and delete mobile screen */}
                <div className="lg:hidden flex flex-col mt-3 gap-5">
                  <h3 className="text-md font-semibold leading-none line-clamp-1 text-myBlackHead">
                    <span>Price:&nbsp;</span>&#36;
                    {item.discount > 0
                      ? (item.price - (item.price * item.discount) / 100) *
                        item.quantity
                      : item.price * item.quantity}
                  </h3>
                  <FaTrash
                    onClick={() => dispatch(delItem(item.uuid))}
                    className="text-base font-semibold leading-none line-clamp-1 duration-500 text-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* price and delete pc screen */}
            <div className="hidden lg:flex flex-col items-end gap-5">
              <h3 className="text-md font-semibold leading-none line-clamp-1 text-myBlackHead">
                <span>Price:&nbsp;</span>&#36;
                {item.discount > 0
                  ? (item.price - (item.price * item.discount) / 100) *
                    item.quantity
                  : item.price * item.quantity}
              </h3>
              <FaTrash
                onClick={() => dispatch(delItem(item.uuid))}
                className="text-base font-semibold leading-none line-clamp-1 duration-500 hover:text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
