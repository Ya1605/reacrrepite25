import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to = "/">Home page</Link> <hr/>
            <Link to = "/users">UsersPage</Link>
        </div>
    );
};

export default HeaderComponent;