import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import AddButton from "../AddButton/AddButton";

const ItemDetail = ({ item }) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    useEffect(() => {
        console.log("ItemDetail",item)
      
       
      }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1 text-center">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p><b>${item.price}</b></p>
                    <AddButton  stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>

    )

}

export default ItemDetail;