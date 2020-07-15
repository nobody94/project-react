import React from 'react';
import Item from '../Item/Item';
import {Link} from 'react-router-dom';

function CategoryBlock(props){  
    return (      
        <div className="block-wrapper"> 
            <h3 className="title"><Link to={`/shop/${props.route}`}>{props.title}</Link></h3>      
            <div className="item-wrapper">
               {
                   props.product.filter((item, idx) => idx < 4).map((item)=><Item key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} product={item} />)
               }
            </div>
        </div>
      );
}

export default CategoryBlock;
