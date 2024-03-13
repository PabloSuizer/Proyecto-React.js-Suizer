import { useContext } from "react";
import iconCart from "../../assets/cart-outline.svg";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ? <Link to={"/cart"} className="btn btn-info position-relative">
            <Cart></Cart>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> : ""
    )
}

export default CartWidget;