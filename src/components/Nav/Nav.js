import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div className="Nav">
            <Link to='/' >Page1</Link>
            <Link to='/Page2' >Page2</Link>
        </div>
    )
}

export default Nav;