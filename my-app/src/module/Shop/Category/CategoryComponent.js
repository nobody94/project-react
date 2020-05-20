import React from 'react';
import Item from '../Item/Item';
import {Link} from 'react-router-dom';
class CategoryBlock extends React.Component {
    constructor(props){
        super(props);  
       
    } 
    ListItem(){
        return this.props.product.filter((item, idx) => idx < 4).map((item)=>{
            return(
            <Item key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} product={item}></Item> 
            )
        });
    } 
  render(){   
    return (      
        <div className="block-wrapper"> 
            <h3 className="title"><Link to={`/shop/${this.props.route}`}>{this.props.title}</Link></h3>      
            <div className="item-wrapper">
                {this.ListItem()}
            </div>
        </div>
      );
  }
}

export default CategoryBlock;
