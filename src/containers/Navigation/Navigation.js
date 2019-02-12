import React, {Component} from 'react';
import './Navigation.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Detail from '../Detail/Detail';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
class Navigation extends Component{
	render(){
	  return(
	  	<Router>

	  		<div>  
				  <Header />
	  	  		<ul className="menu">
	  	  			<li><NavLink exact to="/">HOME</NavLink></li>
	  	  			<li><NavLink to="/about">ABOUT</NavLink></li>
	  	  			<li><NavLink to="/contact">CONTACT</NavLink></li>
	  	  		</ul>
	  	  

	  	  <div className="content">
	  	  		<Route exact path="/" component={Home}/>
	  	  		<Route path="/about" component={About}/>
	  	  		<Route path="/contact" component={Contact}/>
				<Route path="/Detail" component={Detail}/>

	  	  </div>
				<Footer />
	  	  </div>

	  	</Router>

	  	);

	}
}

export default Navigation;