import React,{lazy,Suspense} from 'react';
import {connect} from 'react-redux';
import {Loading} from '../../Utility/Loading/Loading';
const CollectionBlock = lazy(()=> import('./CollectionComponent'));
 const Collection = (props,{match}) =>{
  const shopId =  props.match.params.shopId;
  // console.log(shopId);
  const shopItem = props.data.find((item)=>{
    return shopId === item.routeName
  });
  // console.log(shopItem);
  const listItem = [shopItem].map((item)=>{
    return(      
      <CollectionBlock key={item.id} title={item.title} product={item.items}></CollectionBlock> 
    )
     });
  return(
  <div className="collection-view">
    <Suspense fallback={<Loading></Loading>}>
      {shopId ? listItem : null}
    </Suspense>    
  </div>
  );
 }
 function mapStateToProps(state){
    return{
      data : state.shopData,
    }    
  }
 export default connect(mapStateToProps)(Collection);