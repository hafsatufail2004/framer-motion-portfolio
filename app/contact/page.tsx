import React from "react";
import Image from "next/image";
import image1 from "../../public/shoping-girl.jpg"

const Contact = () => {
  return (
<section>
    {/*phone size page  */}
<div className="block md:hidden">
   <div className="hero min-h-[90vh] w-[85%] contact-img grid items-center justify-center bg-fixed bg-center bg-no-repeatt">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" py-3 max-w-md">
            <h1 className="scroll-m-20 text-lg md:text-xl font-serif tracking-tight mb-5 text-myWhite">
            First Name: <input type="text" className="opacity-30 w-48 rounded-lg border-none"/>
            </h1>
            <h1 className="scroll-m-20 text-lg md:text-xl font-serif tracking-tight mb-5 text-myWhite">
            Last Name: <input type="text" className="opacity-30 w-48 rounded-lg border-none"/>
            </h1>
            <h1 className="scroll-m-20 text-lg md:text-xl font-serif tracking-tight mb-5 text-myWhite">
            Phone No: <input type="text" className="opacity-30 w-48 rounded-lg border-none"/>
            </h1>
            <h1 className="scroll-m-20 text-lg md:text-xl font-serif tracking-tight mb-5 text-myWhite">
            Your Email: <input type="text" className="opacity-30 w-48 rounded-lg border-none"/>
            </h1>
              </div>
          </div>
        </div>
      </div>
      
      
{/* laptop size */}
<div className="hidden md:flex text-center justify-around items-center">
  {/* left side */}
<div >
    <Image src={image1} alt="shopping girl" width={500} className="min-h-screen rounded-xl" />
</div>
{/* right side */}
<div className="py-4 grid items-center justify-center w-[46%] mx-auto min-h-screen bg-myBlackHead/5 rounded-xl ">

       <p className="scroll-m-20 text-xl font-serif tracking-tight mb-5 text-myBlackHead">
            First Name: <input type="text" className=" bg-transparent border-b-2 border-black w-60 "/>
            </p>
            <p className="scroll-m-20 text-xl font-serif tracking-tight mb-5 text-myBlackHead">
            Last Name: <input type="text" className=" bg-transparent border-b-2 border-black w-60 "/>
            </p>
            <p className="scroll-m-20 text-xl font-serif tracking-tight mb-5 text-myBlackHead">
            Phone No: <input type="text" className=" bg-transparent border-b-2 border-black w-60 "/>
            </p>
            <p className="scroll-m-20 text-xl font-serif tracking-tight mb-5 text-myBlackHead">
            Your Email: <input type="text" className=" bg-transparent border-b-2 border-black w-60 "/>
            </p>
            <p className="scroll-m-20 text-xl font-serif tracking-tight mb-5 text-myBlackHead">Enter your feedback</p>
            <input type="text" className="bg-myBlackHead/10 h-60 w-60 rounded-xl" />
</div>
</div>

      </section>
  );
};

export default Contact;
