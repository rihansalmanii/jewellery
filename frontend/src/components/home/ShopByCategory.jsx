import React from "react";

import img1 from "../../assets/images/category/1.jpg";
import img2 from "../../assets/images/category/2.jpg";
import img3 from "../../assets/images/category/3.jpg";

const ShopByCategory = () => {
  return (
    <div className="text-center px-3 py-7">
      <h1 className="text-2xl text-[#5e5e5e] font-semibold uppercase">Shop By Category</h1>
      <div className="flex items-center gap-10 w-full overflow-auto px-5 py-8">
        <div>
          <div className="h-20 w-20 border-[0.5px] border-[#4a4a4a] rounded-full overflow-hidden">
            <img src={img1} alt="" className="object-center" />
          </div>
          <p className="font-semibold text-xs uppercase py-2 text-[#5e5e5e]">Bracelet</p>
        </div>
        <div>
          <div className="h-20 w-20 border-[0.5px] border-[#4a4a4a] rounded-full overflow-hidden">
            <img src={img2} alt="" className="object-center" />
          </div>
          <p className="font-semibold text-xs uppercase py-2 text-[#5e5e5e]">Bracelet</p>
        </div>
        <div>
          <div className="h-20 w-20 border-[0.5px] border-[#4a4a4a] rounded-full overflow-hidden">
            <img src={img3} alt="" className="object-center" />
          </div>
          <p className="font-semibold text-xs uppercase py-2 text-[#5e5e5e]">Bracelet</p>
        </div>
        <div>
          <div className="h-20 w-20 border-[0.5px] border-[#4a4a4a] rounded-full overflow-hidden">
            <img src={img1} alt="" className="object-center" />
          </div>
          <p className="font-semibold text-xs uppercase py-2 text-[#5e5e5e]">Bracelet</p>
        </div>
        <div>
          <div className="h-20 w-20 border-[0.5px] border-[#4a4a4a] rounded-full overflow-hidden">
            <img src={img2} alt="" className="object-center" />
          </div>
          <p className="font-semibold text-xs uppercase py-2 text-[#5e5e5e]">Bracelet</p>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
