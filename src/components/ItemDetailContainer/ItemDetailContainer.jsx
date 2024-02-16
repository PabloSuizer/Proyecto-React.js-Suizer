import React, { useEffect, useState } from 'react'
import arrayProductos from "../json/producto.json";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(()=>{
                let producto = arrayProductos.find(item=>item.id==id)
                resolve(producto);
            },2000);
        })
        promesa.then(data=>{
            setProducto(data);

        })
    }, []);

    return (
        <ItemDetail item={producto}/>
    )
}

export default ItemDetailContainer