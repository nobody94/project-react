import React,{lazy,Suspense} from 'react';
import {connect} from 'react-redux';
import {Loading} from '../../Utility/Loading/Loading';
const CategoryBlock = lazy(()=> import('./CategoryComponent'));

function Category(props){
  return (
    <div className="category-view">
      <Suspense fallback={<Loading></Loading>}>        
        {
          props.data.map((item)=><CategoryBlock key={item.id} title={item.title} product={item.items} route={item.routeName}/>)
        }
      </Suspense>
    </div>
  );
}

function mapStateToProps(state){
  return{
    data : state.shopData,
  }    
}

export default connect(mapStateToProps)(Category);
