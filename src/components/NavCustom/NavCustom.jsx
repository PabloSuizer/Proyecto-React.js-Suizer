import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavCustom = () => {



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
                            <Link className="nav-link text-white" to={"/categoria/MatesCrudos"}>Mates crudos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to={"/categoria/MatesPintados"}>Mates pintados</Link>
                        </li>
                        <li className="nav-item">
                            <div className="col-md-1 d-flex align-items-center">
                                <CartWidget />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavCustom