"use client";
import BestSellingCard from "@/components/shared/bestSellingCard";
import { useAppSelector } from "../store/hooks";

const CatogeryPage = ({ params }: { params: { catogery: string } }) => {
  const product = useAppSelector((state) => state.products);
  const catogeryItems = product.filter(
    (val) => val.catogery == params.catogery
  );
  return (
    <div className="mt-[50px] mb-[100px]">
      {/* headivg */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-myBlackHead">
          {params.catogery}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/*catogery start here */}
      <div className="flex flex-wrap justify-center gap-5">
        {catogeryItems.map((items: any, i) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            catogery={items.catogery}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default CatogeryPage;
