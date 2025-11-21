import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='nav'>
            <h1>Cinema</h1>
            <div> <Link className='link' to="/"> Acceuil </Link> </div>
            <div> <Link className='link' to="/contact">Contact</Link></div>

        </div>
    );
}

export default Navbar;
