import React, { Component } from "react";
import './Home.css';
import Slider from '../slider/slider'
import Desc from '../../components/desc/desc';
import Related from '../../components/product-related/index';

class Home extends Component{
	render(){
		return(
			<div className="container">

				<h2>TOP PRODUCTS</h2>
				<Desc />
				<Slider />
				<Related />
			</div>

			);
	}
}

export default Home;