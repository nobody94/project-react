import React from 'react';
import loading from '../../../asset/loading.gif';
import './Loading.css';
export const Loading = () =>{
    return(
        <div className="loading">
            <img src={loading}></img>
        </div>
    )
}