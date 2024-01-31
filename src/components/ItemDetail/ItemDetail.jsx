const ItemDetail = ({ item }) => {
    return (
        <div className="max-w-2xl mx-auto mt-10 flex flex-col items-center">
            <img src={item.Imagen} alt={item.name} className="w-full h-auto rounded-md mb-4" />

            <div className="p-6 bg-white rounded-lg shadow-md w-full">
                <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
                <p className="text-gray-600 mb-4">{item.descripcion}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold">${item.precio}</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Ver mas</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Agregar al carrito</button>
                </div>
            </div>
        </div>

    )

}

export default ItemDetail;