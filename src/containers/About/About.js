import React, { Component } from "react";
import Desc from '../../components/desc/desc';
import Related from '../../components/product-related/index';
class About extends Component{

	render(){
		
     return(
     
			 <div className="container">
				<h2>About</h2>
				
				<Desc />
				<br />
			
				<p>accusamus beatae ad facilis cum similique qui sunt</p>
				<br />
			
				
				<Related />
		</div>

		   );

	}
}
export default About;