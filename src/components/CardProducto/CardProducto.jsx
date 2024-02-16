import React, { useState } from 'react'

const CardProducto = () => {

    const [productos, setProductos]=useState([]);

    fetch("https://fakestoreapi.com/products")
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        setProductos(datos)
    })


    return (
        <>
            <div className="col col-sm-2">
                {productos.map(produ=>(
                <div key={produ.id}className="card">
                    <img src={produ.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{produ.title}</h5>
                        <p className="card-text"><b>${produ.price}</b></p>
                        <a href="#" className="btn btn-primary">Mas Detalles</a>
                    </div>
                </div>
                ))}
            </div>

        </>
    )
}

export default CardProducto 