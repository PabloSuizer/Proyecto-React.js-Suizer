import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
    const itemsInCart = 5;
    return (

        <button className="relative text-white">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <span className="bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center absolute -top-1 -right-1">{itemsInCart}</span>
        </button>
    )
}

export default CartWidget;