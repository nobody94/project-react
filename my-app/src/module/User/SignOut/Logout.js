import React from 'react';
import {Link} from 'react-router-dom';
import './Logout.css';
function Logout(){
    return(
        <div className="container">
            <div className="logout-page">
                <p className="message">You been logout</p>                
                <Link to='/sign-in' className="action go login">Login</Link>
            </div>
        </div>
    )
}

export default Logout;