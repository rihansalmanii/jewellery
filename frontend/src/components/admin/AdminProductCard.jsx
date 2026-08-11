import React from "react";
import { FiPlus } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../../contexts/CartContext";

const AdminProductCard = (props) => {
  return (
    <div className="w-full">
          <div className="mx-auto flex gap-2 px-4 py-5 h-[187.6px] w-[350.4px] border border-gray-200">
            <div>
              <img
                src={props.item.images?.[0]?.url}
                alt=""
                className="object-cover w-[99.53px] h-[139.32px]"
              />
            </div>
    
            <div className="w-[212.28px] h-35 flex flex-col justify-between">
              <div className="flex flex-col">
                <p className="font-semibold text-[#000000]">{props.item.name}</p>
                <p className="text-sm mt-1">{props.item.description}</p>
                <p className="text-xs">{props.item.size}</p>
              </div>
               <div className="flex items-center justify-between gap-7 px-2">
                <button className="border px-5 py-1">Edit</button>
                <button className="border px-5 py-1">Delete</button>
            </div>
            </div>
           
          </div>
        </div>
  )
}

export default AdminProductCard