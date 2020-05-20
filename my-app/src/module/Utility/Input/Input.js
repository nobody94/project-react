import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props){
        super(props);        
      }  
    render(){
        let label = this.props.label ? <label className={`label ${this.props.value.length ? 'active' : ''}`} for={this.props.for}>{this.props.label}</label> : null;
        return(
            <div className="input-field">
                <input className="input-text" {...this.props}></input>
                {label}
            </div>
        );
    }
} 

export default Input;
