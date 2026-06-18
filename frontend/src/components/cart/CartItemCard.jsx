import React from "react";
import { FiPlus } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../../contexts/CartContext";


const CartItemCard = (props) => {
const { updateQuantity, removeFromCart } = useCart();

const increaseQuantity = () => {
updateQuantity(props.item._id, props.item.quantity + 1);
};

const decreaseQuantity = () => {
if (props.item.quantity > 1) {
updateQuantity(props.item._id, props.item.quantity - 1);
}
};

return ( <div className="w-full"> <div className="mx-auto flex gap-2 px-4 py-5 h-[187.6px] w-[350.4px] border border-gray-200">

    <div>
      <img
        src={props.item.images?.[0]?.url}
        alt=""
        className="object-cover w-[99.53px] h-[139.32px]"
      />
    </div>

    <div className="w-[212.28px] h-36.5 flex flex-col justify-between">
      
      <div className="flex justify-between">
        <p className="font-semibold text-[#000000]">
          {props.item.name}
        </p>

        <span
          className="font-semibold text-[#4C4C4C] cursor-pointer"
          onClick={() => removeFromCart(props.item._id)}
        >
          <RxCross2 size={22} />
        </span>
      </div>

      <div className="flex justify-between items-end">
        
        <div className="h-10 w-27 border border-gray-200 flex items-center justify-between px-2">
          
          <span onClick={decreaseQuantity} className="cursor-pointer">
            <RiSubtractLine />
          </span>

          <input
            type="text"
            className="outline-none w-6 text-center font-semibold text-[#4C4C4C]"
            value={props.item.quantity}
            readOnly
          />

          <span onClick={increaseQuantity} className="cursor-pointer">
            <FiPlus />
          </span>

        </div>

        <p className="font-semibold text-[#4C4C4C] text-sm">
          ₹{props.item.salePrice.toLocaleString()}
        </p>

      </div>
    </div>
  </div>
</div>


);
};

export default CartItemCard;
