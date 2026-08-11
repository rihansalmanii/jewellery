import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../services/ProductService'
import CartItemCard from '../components/cart/CartItemCard'
import AdminProductCard from '../components/admin/AdminProductCard'

const Admin = () => {

    const [products, setProducts] = useState([])
    const [refetch, setrefetch] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            const { products } = await getAllProducts()
            setProducts(products)
        }

        getProducts()
    }, [refetch])

    console.log(products)

  return (
    <div className='h-full w-full px-5'>
        <h1 className='text-3xl font-semibold text-center py-10'>Admin Panel</h1>
        <div className='text-center font-semibold border w-40 mx-auto py-2'>
            <button>Add Product</button>
        </div>
        <div className='mt-5'>
            <h2 className='text-lg font-semibold'>All Products:</h2>
            <div>
                {products.map((item, idx) => (
                    <div>
                        <AdminProductCard item={item}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Admin