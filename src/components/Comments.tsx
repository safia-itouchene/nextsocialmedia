import Image from "next/image"

const Comments = () => {
  return (
    <div className=''>
        {/*write */}
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/28348904/pexels-photo-28348904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""   width={32} height={32} className="w-8 h-8 rounded-full" />
            <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" placeholder="write a comment ..." className="bg-transparent outline-none"/>
                <Image src="/emoji.png" alt=""   width={16} height={16} className="cursor-pointer" />
            </div>
        </div>
        {/*comments */}
        <div className="">
            {/*comment */}
            <div className='flex gap-4 justify-between mt-6'>
               <Image src="https://images.pexels.com/photos/28348904/pexels-photo-28348904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""   width={40} height={40} className="w-10 h-10 rounded-full" />
            
            {/*desc */}
            <div className='flex flex-col gap-2 flex-1'>
                <span className="font-medium">Yuki janne</span>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium eum laborum ut a dolorum assumenda libero quia laudantium eos facilis. Dolores ducimus ipsa earum repudiandae maxime reprehenderit nam eius error.</p>
                <div className="flex items-center gap-8 text-xs text-gry-500 mt-2">
                  <div className="flex items-center gap-4">
                    <Image src='/like.png' alt='' width={12} height={12} className="w-3 h-3 cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                   <span className="text-gray-300">123</span>
                 </div>
              
                 <div className="">Repaly</div>
              </div> 
            </div>
            {/*icon */}
            <Image src='/more.png' alt='' width={16} height={16} className="w-4 h-4 cursor-pointer"/>   
        </div>
    </div>
  </div>
  )
}

export default Comments