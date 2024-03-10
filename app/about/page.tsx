import { StaticImageData } from "next/image"
import AllPeople from "../../components/people"
import { PeopleId } from "@/utils/mock"

const Working:React.FC  = () => {
  return (
    <div className='w-[85%] md:w-[90vw] bg-[#F5F5F5] text-center mx-auto'>

<div className='w-16 h-1 rounded-full bg-transparent bg-gradient-to-r from-orange-700 to-orange-500 inline-flex'/>
<h1 className='text-xl md:text-3xl font-medium py-4 md:pt-14 md:pb-3'>Why Customer Love</h1>

<h2 className='text-lg md:text-2xl font-bold py-4 md:pb-14'>Buying from  us</h2>
{/*  */}
  <p className="text-gray-600 text-sm md:text-md w-[180px] mx-auto md:w-[400px] before:content-['\201C'] after:content-['\201D'] ">
        Without any doubt  i recommend Shira as one of the best clothing brand .One of the best clothing brand  I've came across so far.Wouldn't be hesitated to introduce their work to someone else.
    </p>
    {/* people img */}
<div className='flex flex-wrap justify-around'>
{PeopleId?.map((item) => (
        <AllPeople 
          key={item.id} 
          img={item.image as StaticImageData}
           name={item.name}
            roll={item.roll}
            id={item.id}
        
            />
      ))}     
</div>


<div className='w-16 h-1 mt-7 md:mt-20 rounded-full bg-transparent bg-gradient-to-r from-orange-700 to-orange-500 inline-flex'/>

    
    </div>
  )
}

export default Working