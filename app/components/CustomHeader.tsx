import React from 'react'

const CustomHeader = () => {
  return (
<div className="bg-blue-500 text-white p-3 flex justify-between">
  <div className="flex items-center">
<div className=" w-14 h-14 bg-amber-400 rounded-full text-black font-bold flex justify-center items-center mr-4 ">Logo</div>

  </div>
  <div className="flex items-center">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:861655454. */}
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2696560550. */}
    <a href="#" className="mr-4 hover:border-b-2 transition-all duration-100 ease-in-out hover:animate-bounce">About</a>
    <a href="#" className="mr-4 hover:border-b-2 transition-all duration-100 ease-in-out hover:animate-bounce">Blog</a>
    <a href="#" className="mr-4 hover:border-b-2 transition-all duration-100 ease-in-out hover:animate-bounce">Contact-me</a>

  </div>
</div>



  )
}

export default CustomHeader