import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/*user*/}
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-4">
               <Image src="https://images.pexels.com/photos/28348904/pexels-photo-28348904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
               <span>jack bronu</span>
            </div>
            <Image src="/more.png" alt="" width={16} height={16} />
        </div>
        {/*desc*/}
        <div className='flex flex-col gap-4'>
           <div className="w-full min-h-96 relative">
              <Image src="https://images.pexels.com/photos/28348904/pexels-photo-28348904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="obiect-cover rounded-md"/>
           </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi placeat est veritatis recusandae sit ex omnis sed quaerat consequatur. Odit, eos quae distinctio omnis laboriosam iusto asperiores quis nulla!</p>
        </div>
        {/*intraction*/}
        <div className='flex items-center justify-between text-sm my-4'>
             <div className="flex gap-8">
                 <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                   <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"/>
                     <span className="text-gray-300">|</span>
                      <span>123 <span className="hidden md:inline"> Likes</span></span>
                 </div>

                 <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                   <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer"/>
                     <span className="text-gray-300">|</span>
                      <span>123 <span className="hidden md:inline"> Comment</span></span>
                 </div>
             </div>
             <div className="">
             <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                   <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer"/>
                     <span className="text-gray-300">|</span>
                      <span>123 <span className="hidden md:inline"> Shares</span></span>
                 </div>
             </div>
        </div>
        <Comments/>
    </div>
  )
}

export default Post