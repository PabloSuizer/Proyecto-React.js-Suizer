// ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mx-auto mt-8 p-4 bg-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center">Lista de Artículos</h2>
            <p className="text-lg">{greeting}</p>
        </div>
    );
}

export default ItemListContainer;
