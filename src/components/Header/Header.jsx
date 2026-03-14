import React from 'react';
import { NavLink } from 'react-router';
import "./header.css"

const Header = () => {
    return (
        <div>
            <h3>This header section</h3>
            <div>
                <ul>
                    <NavLink className="list" to="/">Home</NavLink>
                    <NavLink className="list" to="/about">About</NavLink>
                    <NavLink className="list" to="/users">User</NavLink>
                    <NavLink className="list" to="/Todo">Todo</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;