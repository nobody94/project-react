import React,{lazy,Suspense} from 'react';
import {connect} from 'react-redux';
import {Loading} from '../../Utility/Loading/Loading';
const CategoryBlock = lazy(()=> import('./CategoryComponent'));
class Category extends React.Component {
  constructor(props){
    super(props);  
   
} 
  ListItem(){
    return this.props.data.map((item)=>{
      return(
        <CategoryBlock key={item.id} title={item.title} product={item.items} route={item.routeName}></CategoryBlock> 
      )
    });
  }
  render(){    
    return (
      <div className="category-view">
        <Suspense fallback={<Loading></Loading>}>
          {this.ListItem()}
        </Suspense>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    data : state.shopData,
  }    
}
export default connect(mapStateToProps)(Category);
