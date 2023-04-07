import React from 'react';
import './Header.css'
import { FaShoppingCart, FaUserCircle, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/">
                <h1 style={{ color: "white" }}>RENTTOOLS</h1>
            </Link>            <div className="search-box">
                <input type="text" placeholder="Search tools..." className="search-input" />
                <FaUserCircle className="icon" size={32} />
                <FaShoppingCart className="icon" size={32} />
                <Link to="/add">
                    <FaPlus className="icon" size={32} style={{ color: "white" }} />
                </Link>            </div>
        </header>
    );
}

export default Header;