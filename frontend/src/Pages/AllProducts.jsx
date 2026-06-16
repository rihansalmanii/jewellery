import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../services/ProductService";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
    
    const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const data = await getAllProducts()
            setProducts(data.products)
            // console.log(data.products)
            
        } catch(err) {
            console.log(err.message)
        }
    }
    fetchProducts()
  }, []);

//   console.log("products: ",products)

  return (
    <div className="h-full w-full py-3">
        <h1 className="text-2xl py-5 font-semibold text-center text-[#4C4C4C]">All Products</h1>

        {/* display product cards */}
        <div className="w-[95%] mx-auto">
            <div className="grid grid-cols-2 gap-4">
            {products.map((item) => (
            <div key={item._id}>
                <ProductCard product={item}/>
            </div>
        ))}
        </div>
        </div>
        
        
    </div>
  );
};

export default AllProducts;
