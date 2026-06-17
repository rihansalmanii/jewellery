import { GoShareAndroid } from "react-icons/go";

const ProductHeader = ({ name }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-semibold text-[#4C4C63]">
        {name.toUpperCase()}
      </h1>

      <span className="rounded-full p-1 bg-gray-200">
        <GoShareAndroid size={18} />
      </span>
    </div>
  );
};

export default ProductHeader;