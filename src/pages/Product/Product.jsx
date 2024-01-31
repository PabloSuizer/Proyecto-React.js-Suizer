import React from 'react'
import ItemListContainer from '../../components/ItemsListConteiner/ItemsListConteiner'
import Navbar from '../../components/Navbar/navBar'

const Product = () => {
  return (
    <>
      <Navbar />
      <div className='text-center'>
        <div className='bg-gray-200 p-4 font-bold'>
          Productos
        </div>
        <ItemListContainer />
      </div>

    </>
  )
}

export default Product