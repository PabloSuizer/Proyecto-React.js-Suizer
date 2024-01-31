import { useEffect, useState } from "react";
import arrayProductos from "../json/producto.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = arrayProductos.find((item) => item.Id === "1");
                console.log(producto);
                resolve(producto);
            }, 3000);
        });

        promesa.then((data) => {
            setItems(data);
            setFilteredItems([data]); // Inicialmente, establece los elementos filtrados como el producto encontrado
            console.log(data);
            console.log(item);
        });
    }, []); // Añade un arreglo vacío de dependencias para que useEffect solo se ejecute una vez al montar el componente

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();

        // Filtra los elementos basándose en el término de búsqueda
        const filteredItems = arrayProductos.filter((item) =>
            item.name.toLowerCase().includes(searchTerm)
        );

        setFilteredItems(filteredItems);
        setSearchTerm(searchTerm);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100">
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearch}
                className="border border-gray-300 p-2 w-full mb-4"
            />

            {filteredItems.map((filteredItem) => (
                <ItemDetail key={filteredItem.Id} item={filteredItem} />
            ))}
        </div>
    );
};



export default ItemDetailContainer;