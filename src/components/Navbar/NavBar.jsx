
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {


    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">Mi Sitio</div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white">Inicio</a>
                        <a href="#" className="text-white">Productos</a>
                        <a href="#" className="text-white">Contacto</a>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
