import React from 'react';
import {Route} from 'react-router-dom';
import Category from './Category/Category';
import Collection from './Collection/Collection';
import './Shop.css';

const Shop  = ({ match }) => {
  // console.log(match.path);
  return(
   <div className='container'>
   <Route exact path={`${match.path}`}><Category></Category></Route>
   <Route path={`${match.path}/:shopId`} component={Collection}/>
 </div>
  );
}



export default Shop ;