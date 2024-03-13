import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from "../Loading/Loading";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        console.log("id items",id);
    
    }, [])
    


    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id:resultado.id, ...resultado.data()});
        });
    }, [id]);

    return (
        <>
        {loading ? <Loading /> : <ItemDetail item={item} />}
    </>
    )
}

export default ItemDetailContainer