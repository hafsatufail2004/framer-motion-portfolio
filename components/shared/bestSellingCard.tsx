import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import BestSellCardAddtoCart from "../BestSellCardAddtoCart";

const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  catogery,
  slug,
  discount,
}: {
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
  price: number;
  catogery: string;
  slug: string;
  discount: number;
}) => {
  return (
    <section className="max-w-[350px] h-[35rem] mb-32 p-4 mx-auto shadow-xl rounded-xl group relative">
      <Link href={`/${catogery}/${slug}`}>
        {/* image div */}
        <div className="h-[23rem] block overflow-hidden rounded ">
          <Image src={src} alt={alt} width={400} height={400} />
        </div>

        {/* heading */}
        <div className="mt-4">
          {title && (
            <h2 className="scroll-m-20 border-b pb-2 text-lg text-myBlackHead font-sans font-semibold tracking-tight transition-colors first:mt-0 line-clamp-1">
              {title}
            </h2>
          )}

          {description && (
            <p className="scroll-m-20 mt-2 text-sm text-myBlackPara font-sans font-semibold tracking-tight line-clamp-1">
              {description}
            </p>
          )}

          {price && (
            <div className="flex gap-4">
              <p
                className={`scroll-m-20 mt-2 tracking-tight text-base text-myBlackHead font-sans font-semibold line-clamp-1 ${
                  discount > 0 &&
                  "line-through decoration-2 decoration-myOrange/70"
                }`}
              >
                ${price}
              </p>
              {/* discount val */}
              {discount > 0 && (
                <p className="scroll-m-20 mt-2 tracking-tight text-base text-myBlackHead font-sans font-semibold line-clamp-1">
                  ${price - (price * discount) / 100}
                </p>
              )}
            </div>
          )}
        </div>
      </Link>
      {/* button div start*/}
      <div className="flex justify-between ">
  
        {/* buy now button */}
        <Button className="group bg-myBlackHead scroll-m-20 mt-2 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300 bottom-2 left-2 absolute">
          <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300 " />
          Buy Now
        </Button>
        {discount > 0 && (
          <div className="scroll-m-20 text-sm  text-myWhite bg-myOrange absolute left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-br-xl top-0 font-semibold tracking-tight  myDiscount">
            {" "}
            {`${discount}% off`}
          </div>
        )}
            {/* add to cart button */}
            <BestSellCardAddtoCart slug={slug} />
      </div>
      {/* button div end */}
    </section>
  );
};

export default BestSellingCard;
