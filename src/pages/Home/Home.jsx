import React from 'react'
import Navbar from '../../components/Navbar/navBar'
import CardProducto from '../../components/CardProducto/CardProducto'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="justify-center flex m-9  gap-9">
        <CardProducto />
        <CardProducto />
        <CardProducto />
      </div>
    </>
  )
}

export default Home