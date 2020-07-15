import React from 'react';

function Order(props){
    return(
        <div className="order-item">
            <p className="prd-name">Product: {props.name}</p>       
            <div className="image-wrapper">
                <img src={props.imageUrl}></img>
            </div>                 
            <p>Price: {props.price}</p>
            <p>Quantity: {props.quantity}</p>            
        </div>
    )
}

export default Order;