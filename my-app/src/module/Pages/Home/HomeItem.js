import React from 'react';
import { withRouter,Link} from 'react-router-dom';

const HomeItem = (props,{match}) =>{
  const item = 'item' + (props.size =='large'? ' large':''); 
  const link = props.match.url;
  // console.log(link);
    return (
      <div className={item} >
        <Link className="banner" to={`${link}${props.linkUrl}`} >
          <img src={props.imageUrl}></img>
          <div className="content">
            <h3 className="title">{props.title}</h3>
            <span className="sub-title">Shop now</span>
          </div>
        </Link>
      </div>
    );
}
export default withRouter(HomeItem);
