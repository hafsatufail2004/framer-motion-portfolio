"use client";
import { addtoCart } from "@/app/store/features/cart";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/app/store/hooks";

const AddToCartToast = ({ cardItem }: any) => {
  const dispatch = useAppDispatch();
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
      <div onClick={() => dispatch(addtoCart(cardItem))}>
        <Button
          onClick={notify}
          className="group bg-myBlackHead scroll-m-20 mt-2 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300"
        >
          <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
          Add to Cart
        </Button>
      </div>
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

export default AddToCartToast;
