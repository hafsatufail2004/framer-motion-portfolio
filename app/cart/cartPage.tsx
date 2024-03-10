"use client";

import CartCard from "@/components/shared/cartCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAppSelector } from "../store/hooks";

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const total = cartArray.reduce((total, array) => {
    return (
      total +
      (array.price - (array.price * array.discount) / 100) * array.quantity
    );
  }, 0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {/* items */}
      <div className=" col-span-2">
        <CartCard />
      </div>
      {/* summary */}
      <div className="bg-myBlackHead/5 p-5 rounded-xl">
        {/* heading */}
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight uppercase">
          Order Summary
        </h2>
        {/* divider */}
        <div className=" divider mt-0 mb-0" />

        {/* pricing */}
        <div className="text-sm font-semibold tracking-tight uppercase text-myBlackPara">
          {/* product prices */}
          <div className="flex items-center justify-between capitalize">
            <h2>Sub Total:</h2>
            <h2>${total}</h2>
          </div>
          {/* delivery charges */}
          <div className="flex items-center justify-between capitalize">
            <h2>delivery charges:</h2>
            <h2>TBD</h2>
          </div>
          {/* services charges */}
          <div className="flex items-center justify-between capitalize">
            <h2>sales tax:</h2>
            <h2>TBD</h2>
          </div>
        </div>
        {/* divider */}
        <div className=" divider mt-0 mb-0" />
        {/* estimated total  */}
        <div className="flex text-md font-semibold items-center justify-between capitalize tracking-tighter">
          <h2>estimated Total:</h2>
          <h2>${total}</h2>
        </div>
        {/* divider */}
        <div className=" divider mt-0 mb-0" />
        {/* checkout button */}
        <div className=" flex items-center justify-center w-full">
          <Button className=" text-myWhite bg-myBlackHead rounded-xl hover:bg-transparent hover:text-myBlackHead duration-300 scroll-m-20 text-sm hover:shadow-2xl font-semibold tracking-tight uppercase">
            Proceed to Checkout
          </Button>
        </div>
        {/* divider */}
        <div className=" divider mt-0 mb-0" />
        {/* note */}
        <div className="text-xs font-semibold tracking-tight text-myBlackHead w-[97%] text-center italic">
          {`* Delivery Charges and Sales Tax will be calculated in Checkout Page.
`}
        </div>
      </div>
    </div>
  );
};

export default CartPage;


