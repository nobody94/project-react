import React from 'react';
import {Route} from 'react-router-dom';
import Detail from './User-detail';
import './User.css';
const User = ({match}) =>{
    // console.log(match.path);
    return(
        <div className='container'>
        <Route path={`${match.path}/:userId`} component={Detail}/>
      </div>
       );
}

export default User;