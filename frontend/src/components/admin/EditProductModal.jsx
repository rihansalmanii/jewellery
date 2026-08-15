import React from 'react'

const EditProductModal = (props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* background overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={props.onClose}
      />

      {/* modal */}
      <div className="relative z-10 w-[90%] max-w-lg rounded-xl bg-white p-6">
        <h2 className="text-xl font-semibold">
          Edit Product
        </h2>

        {/* form here */}

        <form action="">
            
        </form>
      </div>
    </div>
  );
}

export default EditProductModal