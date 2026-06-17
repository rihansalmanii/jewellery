import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";


const CartItemCard = (props) => {

    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        if(quantity < 10){
            setQuantity(quantity + 1)
        }
    }

    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

  console.log();
  return (
    <div className=" w-full">
      <div className="mx-auto flex gap-2 px-4 py-5 h-[187.6px] w-[350.4px] border border-gray-200">
        <div className="">
          <img
            src="https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/697d8feb5f5de502c7201143/cat_img/GOLD_FARMING_SHINE_PANDENT__MANGALSUTAR__PU4UQWUS72_2026-06-03_1.png"
            alt=""
            className="object-cover w-[99.53px] h-[139.32px]"
          />
        </div>
        <div className="w-[212.28px] h-36.5 flex flex-col justify-between ">
          <p>{props.item.name}</p>
          <div className="flex justify-between items-end">
            <div className="h-10 w-27 border border-gray-200 flex items-center justify-between px-2">

              <span onClick={decreaseQuantity}>
                <RiSubtractLine />

              </span>
              <input type="text" className="outline-none w-2 font-semibold text-[#4C4C4C]" 
             value={quantity}
             onChange={(e) => {
                e.target
             }}/>
              <span onClick={increaseQuantity}>
                <FiPlus />
              </span>
            </div>
             <p className="font-semibold text-[#4C4C4C] text-sm">₹{props.item.salePrice.toLocaleString()}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
