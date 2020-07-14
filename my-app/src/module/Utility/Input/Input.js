import React from 'react';
import './Input.css';

function Input(props) {
    let label = props.label 
        ? <label className={`label ${props.value.length ? 'active' : ''}`} for={props.for}>{props.label}</label> 
        : null;
    return(
        <div className="input-field">
            <input className="input-text"
            name={props.name}
            type={props.type || 'text' }
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            required={required || false}
            ></input>
            {label}
        </div>
    );
} 

export default Input;
