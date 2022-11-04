import React from "react"
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus, AiOutlineUser } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"

const Footer = () => {
  return (
    <div className={`fixed bottom-0 left-0 w-screen h-12 flex justify-around items-center border-t-black`}>
      <div className={`h-8 flex items-center`}>
        <AiOutlineHome className={`h-5 w-5 font-bold scale-125`} />
      </div>
      <div className={`h-8 flex items-center`}>
        <AiOutlineSearch className={`h-5 w-5 font-bold scale-125`} />
      </div>
      <div className={`h-8  bg-green-300 w-20 rounded-full text-center grid place-items-center scale-125`}>
        <AiOutlinePlus className={`h-5 w-5 font-bold scale-125`} />
      </div>
      <div className={`h-8 flex items-center`}>
        <FaRegComment className={`h-5 w-5 font-bold scale-125`} />
      </div>
      <div className={`h-8 flex items-center`}>
        <AiOutlineUser className={`h-5 w-5 font-bold scale-125`} />
      </div>
    </div>
  )
}

export default Footer