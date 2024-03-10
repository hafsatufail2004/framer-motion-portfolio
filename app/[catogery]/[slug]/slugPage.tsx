"use client";
import { Button } from "@/components/ui/button";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import SlugComponent from "@/components/shared/slugComponent";
import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import AddToCartToast from "@/components/AddToCartToast";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val) => val.slug == params.slug);
  const [cardItem, setCardItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image[0],
    slug: slug[0].slug,
    discount: slug[0].discount,
    price: slug[0].price,
    catogery: slug[0].catogery,
    size: slug[0].size[0],
    quantity: slug[0].quantity,
    color: slug[0].color[0],
  });
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        {/* images,left side portion */}
        <SlugComponent image={slug[0].image} />
        {/* right side portion */}
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          {/* heading 1 */}
          <h2 className="scroll-m-20 mt-3 text-lg font-normal uppercase tracking-tight text-myBlackPara">
            {slug[0].catogery}
          </h2>
          {/* heading 2 */}
          <h1 className="scroll-m-20 mt-3 text-2xl font-semibold tracking-tight text-myBlackHead mb-1">
            {slug[0].title}
          </h1>

          {/* rating */}
          <div className="rating mt-2">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-myOrange"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-myOrange"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-myOrange"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-myOrange"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-myOrange"
            />
          </div>
          <div className="divider" />

          {/* description */}
          <p className="leading-relaxed mt-2 scroll-m-20 text-md font-light text-myBlackPara">
            {slug[0].description}{" "}
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            {/* color div start here */}
            <div className="flex">
              {/* color options start */}
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight ">
                Color
              </span>
              {slug[0].color.map((item: any, i: any) => (
                <button
                  onClick={() => setCardItem({ ...cardItem, color: item })}
                  key={i}
                  className="border-2 border-gray-300 active:border-black focus:border-black ml-1  rounded-full w-6 h-6 focus:outline-none"
                  style={{ backgroundColor: item }}
                />
              ))}
            </div>
            {/* size options start */}
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
                    {slug[0].size.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            {/* size options end */}
          </div>
          {/* add and remove */}
          <div className=" flex justify-center items-center gap-2">
            <Button
              onClick={() =>
                setCardItem({ ...cardItem, quantity: ++cardItem.quantity })
              }
              className="group h-fit w-fit bg-myBlackHead scroll-m-20 mt-3 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300"
            >
              <FaPlus className="mr-2 h-4 w-4 text-lg m-auto group-hover:text-myOrange duration-300 " />
            </Button>
            {/* quantity */}
            <div className="scroll-m-20 text-xl mt-1 font-semibold tracking-tight">
              {cardItem.quantity}
            </div>
            <Button
              onClick={() =>
                setCardItem({
                  ...cardItem,
                  quantity: cardItem.quantity <= 1 ? 1 : --cardItem.quantity,
                })
              }
              className="group h-fit w-fit bg-myBlackHead scroll-m-20 mt-3 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300"
            >
              <FaMinus className="mr-2 h-4 w-4 text-lg m-auto group-hover:text-myOrange duration-300 " />
            </Button>
          </div>
          {/* divider */}
          <div className="divider" />

          {/* price and discount */}
          <div className="flex items-center justify-between">
            {/* price */}
            <div className="flex">
              <span
                className={`scroll-m-20 title-font font-semibold text-2xl text-myBlackHead 
          ${
            cardItem.discount > 0 &&
            "line-through decoration-2 decoration-myOrange/70"
          }`}
              >
                ${cardItem.price * cardItem.quantity}
              </span>
              {/* discount val */}
              {cardItem.discount > 0 && (
                <p className="scroll-m-20 ml-5 title-font font-semibold text-2xl text-myBlackHead">
                  $
                  {(cardItem.price -
                    (cardItem.price * cardItem.discount) / 100) *
                    cardItem.quantity}
                </p>
              )}
            </div>

            {/*cart and buy now buttons */}
            <AddToCartToast cardItem={cardItem} />
          </div>
          <Button className="group w-full bg-myBlackHead scroll-m-20 mt-3 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300">
            <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300 " />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
