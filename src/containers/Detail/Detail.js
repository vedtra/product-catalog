import React, { Component } from "react";
import Desc from '../../components/desc/desc';
import './Detail.css'
import Gbr from './desc.png';
import Related from '../../components/product-related/index';


class Detail extends Component{
    
    render(){
		return(
			<div className="container">

				<h2>DETAIL PRODUCT</h2>
                <Desc />
                <img src={Gbr} className="Gambar" alt="detail" />
                <p className="descr">accusamus beatae ad facilis cum similique qui sunt</p>
								<Related />
			</div>
		

			);
	}
}
export default Detail;