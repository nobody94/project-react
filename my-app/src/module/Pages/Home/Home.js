import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import Item from './HomeItem';

class Home extends React.Component { 
  ListItem(){
    return this.props.data.map((item)=>{
      return(
        <Item key={item.id} imageUrl={item.imageUrl} title={item.title} linkUrl={item.linkUrl} size={item.size}></Item> 
      )
    });
  }
  render(){ 
    return (
      <div className="container">
        <div className="home-banner">
          {this.ListItem()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    data : state.homeData
  }
}
export default connect(mapStateToProps)(Home);
