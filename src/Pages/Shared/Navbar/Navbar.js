import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/Home'>Home</Link>
            <Link to='/hierarcy'>Hierarcy</Link>
          
        </div>
    );
};

export default Navbar;