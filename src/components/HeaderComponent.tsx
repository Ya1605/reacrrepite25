import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to = "/">Home page</Link><br/>
            <Link to = "/users">UsersPage</Link><br/>
            <Link to="/comments">CommentsPage</Link><br/>
            <Link to = "/posts">PostsPage</Link><hr/>
        </div>
    );
};

export default HeaderComponent;