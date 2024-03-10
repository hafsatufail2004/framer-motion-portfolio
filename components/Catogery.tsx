import React from "react";
import Image from "next/image";
import Link from "next/link";
import tops from "../public/picst/no-onecares.avif";
import pants from "../public/picsp/gray-pant.avif";
import shoes from "../public/picss/brown-leather-dress-shoes.avif";
import jewelry from "../public/picsj/accessories.avif";

const Catogery = () => {
  return (
    <section className="my-[100px]">
      {/* headivg */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-myBlackHead">
          Our Catogries
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* catogeries start here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* catogery 1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="/tops">
            <Image
              src={tops}
              alt="tops"
              width={350}
              height={350}
              className=" rounded-xl duration-500 group-hover:scale-125 h-96"
            />
            <div className=" absolute duration-500 group-hover:bottom-48 -bottom-20 scroll-m-20  text-myWhite bg-myBlackHead/75 hidden lg:block text-center w-full font-extrabold tracking-tight text-4xl">
              <h1 className=" uppercase">tops</h1>
            </div>
            <div className=" absolute duration-500 bottom-4 scroll-m-20  text-myWhite bg-myBlackHead/75  lg:hidden block text-center w-full font-extrabold tracking-tight text-4xl">
              <h1 className=" uppercase">tops</h1>
            </div>
          </Link>
        </div>

        {/* catogery 2*/}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="/pants">
            <Image
              src={pants}
              alt="pants"
              width={350}
              height={350}
              className=" rounded-xl duration-500 group-hover:scale-125 h-96 "
            />
            <div className=" absolute duration-500 group-hover:bottom-48 -bottom-20 scroll-m-20  text-myWhite bg-myBlackHead/75 hidden lg:block text-center w-full font-extrabold tracking-tight text-4xl ">
              <h1 className=" uppercase">pants</h1>
            </div>
            <div className=" absolute duration-500 bottom-4 scroll-m-20  text-myWhite bg-myBlackHead/75  lg:hidden block text-center w-full font-extrabold tracking-tight text-4xl">
              <h1 className=" uppercase">pants</h1>
            </div>
          </Link>
        </div>

        {/* catogery 3*/}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="/shoes">
            <Image
              src={shoes}
              alt="shoes"
              width={350}
              height={350}
              className=" rounded-xl duration-500 group-hover:scale-125 h-96 "
            />
            <div className=" absolute duration-500 group-hover:bottom-48 -bottom-20 scroll-m-20  text-myWhite bg-myBlackHead/75 hidden lg:block text-center w-full font-extrabold tracking-tight text-4xl ">
              <h1 className=" uppercase">shoes</h1>{" "}
            </div>
            <div className=" absolute duration-500 bottom-4 scroll-m-20  text-myWhite bg-myBlackHead/75  lg:hidden block text-center w-full font-extrabold tracking-tight text-4xl">
              <h1 className=" uppercase">shoes</h1>
            </div>
          </Link>
        </div>

        {/* catogery 4*/}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href="/accessories">
            <Image
              src={jewelry}
              alt="accessorise"
              width={350}
              height={350}
              className=" rounded-xl duration-500 group-hover:scale-125 h-96"
            />
            <div className=" absolute duration-500 group-hover:bottom-48 -bottom-20 scroll-m-20  text-myWhite bg-myBlackHead/75 hidden lg:block text-center w-full font-extrabold tracking-tight text-4xl ">
              <h1 className=" uppercase">accessorise</h1>
            </div>
            <div className=" absolute duration-500 bottom-4 scroll-m-20  text-myWhite bg-myBlackHead/75  lg:hidden block text-center w-full font-extrabold tracking-tight text-4xl">
              <h1 className=" uppercase">accessorise</h1>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Catogery;
