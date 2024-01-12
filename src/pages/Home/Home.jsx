import React from 'react'
import Navbar from '../../components/Navbar/navBar'
import CardProducto from '../../components/CardProducto/CardProducto'
import ItemListContainer from '../../components/ItemsListConteiner/ItemsListConteiner'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="justify-center flex m-9  gap-9">
        <CardProducto />
        <CardProducto />
        <CardProducto />
      </div>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </>
  )
}

export default Home