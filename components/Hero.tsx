import { Button } from "@/components/ui/button";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <section>
      <div className="hero min-h-[80vh] hero-img bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5 text-myWhite">
              Futuristic <span className="text-myOrange">Clothes</span>
            </h1>
            <p className="mb-5 scroll-m-20 text-xl text-myWhite font-semibold tracking-tight">
              Upgrade your Wardrobe with Sleek & Stylish Apparels and Top-Notch
              Shoes.
            </p>

            <Button className="text-myWhite hover:text-myOrange group text-md duration-300 outline outline-offset-4 outline-1 hover:rounded-full rounded-xl">
              <LiaShoppingBagSolid className="group-hover:animate-bounce mr-3 w-6 h-6" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
