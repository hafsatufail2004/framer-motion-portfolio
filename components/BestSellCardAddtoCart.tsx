"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { addtoCart } from "@/app/store/features/cart";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { useAppDispatch } from "@/app/store/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BestSellCardAddtoCart = ({ slug }: { slug: string }) => {
  // calling product
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
  // notify toast
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
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group bg-myBlackHead scroll-m-20 mt-2 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300 bottom-2 right-2 absolute">
            <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem] bg-myWhite">
          {/* size div start here */}
          <div className="flex ml-6 items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight ">
              Size
            </span>
            <div className="relative">
              <label className="form-control w-full max-w-xs">
                <select
                  onChange={(e) =>
                    setCardItem({ ...cardItem, size: e.target.value })
                  }
                  className="select h-10 select-bordered"
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
          {/* size options end */}
          {/* color div start here */}
          <div className="flex mt-5">
            {/* color options start */}
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight ">
              Color
            </span>
            {product?.color.map((item: any, i: any) => (
              <button
                key={i}
                onClick={() => setCardItem({ ...cardItem, color: item })}
                className="border-2 border-gray-300 active:border-black focus:border-black ml-1  
rounded-full w-6 h-6 focus:outline-none"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          {/* color options end */}
          {/* add to cart button */}
          <div className="w-fit" onClick={notify}>
            <Button
              onClick={() => dispatch(addtoCart(cardItem))}
              className="group mt-5 bg-myBlackHead scroll-m-20 w-full rounded-xl shadow-xl tracking-tight 
text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300 "
            >
              <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Add to Cart
            </Button>
          </div>
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
    </div>
  );
};

export default BestSellCardAddtoCart;
