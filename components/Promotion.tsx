import React from "react";

const Promotion = () => {
  return (
    <section className="my-[100px]">
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-myBlackHead">
          Our Promotions
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* promotion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1st child */}
        <div className="hero h-[25rem] promo-1">
          <div className="hero-overlay bg-opacity-55"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="scroll-m-20 border-b text-4xl text-myWhite font-bold tracking-tight transition-colors first:mt-0">
                GET UPTO <span className="text-myOrange"> 30%</span> OFF
              </h1>
              <p className="scroll-m-20 text-base font-medium mt-2 tracking-tight">
                Flash Sale,get upto 30% off on the Season Variant.
              </p>
            </div>
          </div>
        </div>
        {/* 2nd child */}
        <div className="hero h-[25rem] promo-2">
          <div className="hero-overlay bg-opacity-55"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="scroll-m-20 border-b text-4xl text-myWhite font-bold tracking-tight transition-colors first:mt-0">
                GET UPTO <span className="text-myOrange"> 25%</span> OFF
              </h1>
              <p className="scroll-m-20 text-base font-medium mt-2 tracking-tight">
                Flash Sale,get upto 30% off on the New Jewelry Arrival.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
