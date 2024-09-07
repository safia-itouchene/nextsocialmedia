import Link from "next/link"

function Navbar() {
  return (
    <div className=''>
       {/*left*/}
       <div className=''>
         <Link href="/">NEXTSOCIAL</Link>
       </div>

       {/*center*/}
       <div className='hidden'></div>

       {/*right*/}
       <div className=''></div>
    </div>
  )
}

export default Navbar
