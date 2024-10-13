import React from 'react'

const ProductDescription = () => {
  return (
    <div className='max-padd-container mt-10'>
        <div className='flex gap-3 mb-4'>
            <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Descripción</button>
        </div>
        <div className='flex flex-col pb-16'>
        {/*<p className='text-sm'>{product.description}</p>  Renderiza la descripción del producto */}
        </div>
    </div>
  )
}

export default ProductDescription