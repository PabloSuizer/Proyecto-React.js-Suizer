import React, { useState } from 'react';

const AddButton = ({ onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAdd = () => {
        onAdd(quantity);
        // Aquí podrías reiniciar la cantidad a 1 si deseas
        // setQuantity(1);
    };

    return (
        <div className="flex items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-l-md" onClick={decrement}>-</button>
            <input type="text" value={quantity} readOnly className="px-4 py-2 w-16 text-center" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md" onClick={increment}>+</button>
            <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md" onClick={handleAdd}>Agregar</button>
        </div>
    );
};

export default AddButton;