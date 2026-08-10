import React, { useState } from "react";

import Menu from "../components/home/Menu";
import HeroSlider from "../components/home/HeroSlider";
import ShopByCategory from "../components/home/ShopByCategory";

const Home = () => {
  

  return (
    <>
        <div className="pb-10">
          <HeroSlider />
          <ShopByCategory />
        </div>
       
      <Menu />
    </>
  );
};

export default Home;