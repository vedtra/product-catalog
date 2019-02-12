import React, {Component} from 'react';
import {Link } from "react-router-dom";
import './index.css';
import Load from './load.PNG';
import Detail from '../../containers/Detail/Detail';
class index extends Component{
	constructor(props) {
    super(props);

    this.state = {
      items: [],
      visible: 5,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 2};
    });
  }
  detail(){

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos").then(
      res => res.json()
    ).then(res => {
      this.setState({
        items: res
      });
    }).catch(error => {
      console.error(error);
      this.setState({
        error: true
      });
    });
  }

  render() {
    return (
      <div>
      <h2 className="title">Related Product</h2>
        <div className="tiles" aria-live="polite">
          {this.state.items.slice(0, this.state.visible).map((item, index) => {
              return (
           <Link to="/Detail">  
            <div class="gallery">
			<img src={item.thumbnailUrl} width="300" height="300" />
			<div class="desc">{item.title}</div>
			
			</div>	
			</Link>
              );
            })}
          </div>
          {this.state.visible < this.state.items.length &&
             
             <div class="gallery">
             <img src={Load} onClick={this.loadMore} width="300" height="300" />
    
             </div>


          }
        </div>
    );
  }
}
export default index;
