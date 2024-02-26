import React, { useEffect, useState } from 'react'
import arrayProductos from "../json/producto.json";
import { Link, useParams } from 'react-router-dom';
//import img1 from "../../../src/assets/Bombillas.jpg"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [mensajeError, setMensajeError] = useState("");
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            let newProductos = id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos;

            if (newProductos.length > 0) {
                resolve(newProductos);
            } else {
                reject("Error! No se encontraron productos!");
            }
        })

        promesa.then(data => {
            setProductos(data)
        })
            .catch(error => {
                setMensajeError(error);
            })
    }, [id]);

    return (
        <div className="container">
            <div className="row">
            </div>
            <div className="row">
                {productos.map(item => (
                    <div key={item.id} className="col-md-2">
                        <Link to={"/item/"+ item.id}>
                        <div className="card mt-4 border-0 text-center">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h6 className="text-center"><strong>${item.price}</strong></h6>
                            </div>
                                <button type="button" className="btn btn-info">Ver mas</button>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col">
                    <h1 className="text-center text-danger">{mensajeError}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer