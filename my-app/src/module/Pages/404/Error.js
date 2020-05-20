import React from 'react';
import {Link} from 'react-router-dom';
import './Error.css';
function Error() {
  return (
    <div className="container">
      <div className="no-route">
      <h3>404</h3>
      <p>Opps, page not found!</p>
      <Link to="/" className="action go home">Go Home</Link>
      </div>    
    </div>
  );
}

export default Error;
