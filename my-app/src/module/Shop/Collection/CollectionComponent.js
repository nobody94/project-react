import React from 'react';
import Item from '../Item/Item';

function CollectionBlock(props){
    return (      
        <div className="block-wrapper"> 
            <h3 className="title">{props.title}</h3>      
            <div className="item-wrapper">
               {
                   props.product.map((item, key)=><Item key={key} name={item.name} imageUrl={item.imageUrl} price={item.price} product={item}></Item>)
               }
            </div>
        </div>
      );
}

export default CollectionBlock;
