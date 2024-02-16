import React from 'react'
import { Link } from 'react-router-dom';

const NavCustom = () => {

const totalAgregado=5;


    return (
        <>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white">FyA Deco Arte</span>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to={"/"}>Inicio</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to={"/categoria/Mates Crudos"}>Mates crudos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to={"/categoria/Mates Pintados"}>Mates pintados</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#"/>
                            <i className="fas fa-shopping-cart text-white"></i> <span id="cart-quantity">{totalAgregado}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavCustom