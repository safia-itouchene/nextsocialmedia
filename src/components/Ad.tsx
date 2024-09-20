import Image from "next/image"

const Ad = ({size}:{size:"sm"|"md"|"lg"  }) => {
  return (
    <div className='p-4 bg-white rounded-md shadow-md text-sm'>
       {/*top */}
       <div className=" flex items-center justify-between text-gray-500 font-medium">
          <span>Sponsered Ads</span>
          <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer"/>
       </div>
        {/*bottom */}
       <div className={`flex flex-col mt-4 ${size==="sm"?"gap-2":"gap-4"}`}>
          <div className={`relative w-full ${size==="sm"?"h-24":size==="md"?"h-36":"h-48"}`}>
            <Image src="https://images.pexels.com/photos/28348904/pexels-photo-28348904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-lg object-cover"/>
          </div>
          <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/28348904/pexels-photo-28348904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={24} height={24} className="rounded-full w-6 h-6 object-cover"/>
            <span className="text-bleu-500 font-medium">Code it up</span>
          </div>
           <p className={size==="sm"?"text-xs":"text-sm"}>
             {size==="sm"? "Lorem ipsum dolor sit amet consectetur adipisicing elit." : size==="md"? " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores quae repellat," : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores quae repellat, voluptatibus illum at vero corrupti laborum voluptas eius animi tempora aliquam ipsam ipsum iusto ab? Excepturi, debitis assumenda."}
           </p>
           <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn more</button>
       </div>
       
    </div>
  )
}

export default Ad