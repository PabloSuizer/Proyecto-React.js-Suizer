import React, { useEffect, useState } from 'react'
import arrayProductos from "../json/producto.json";
import { Link, useParams } from 'react-router-dom';
import { addDoc,getDocs, collection, getFirestore, query, where } from 'firebase/firestore';
//import img1 from "../../../src/assets/Bombillas.jpg"
import ItemList from "../../components/ItemList/ItemList";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const { id } = useParams();

    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         let newProductos = id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos;

    //         if (newProductos.length > 0) {
    //             resolve(newProductos);
    //         } else {
    //             reject("Error! No se encontraron productos!");
    //         }
    //     })

    //     promesa.then(data => {
    //         setProductos(data)
    //     })
    //         .catch(error => {
    //             setMensajeError(error);
    //         })
    // }, [id]);

//  useEffect(()=>{
//  const db = getFirestore(); 
//  const itemsCollection = collection(db, "items")

//  arrayProductos.forEach(productos =>{
//          addDoc(itemsCollection, productos);
//  });
//  console.log('PRODUCTOS CARGADOS')
//  }, [])


useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs(consulta).then(resultado => {
        setLoading(false);
        setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
    });
}, [id]);

    return (
        <div className="container">
            <div className="row">
            </div>
            <ItemList items={items} />
            {/* <div className="row">
                {productos.map(item => (
                    <div key={item.id} className="col-md-2">
                        <Link to={"/item/" + item.id}>
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
                    <h1 className="text-center text-danger">{'ERROR'}</h1>
                </div>
            </div> */}
        </div>
    )
}

export default ItemListContainer