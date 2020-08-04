import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Header = props => {
    return (
		<>
			<nav className='navbar navbar-default navbar-fixed-top'>
				<div className='container'>
					<div className='navbar-header'>
						<button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>                        
						</button>
						<Link className='navbar-brand' to='/'>&lt;Oliver Coder&gt;</Link>
					</div>
					<div className='collapse navbar-collapse' id='myNavbar'>
						<ul className='nav navbar-nav navbar-right'>
							<li><Link to='/'>INÍCIO</Link></li>
							<li><Link to='/Services'>SERVIÇOS</Link></li>
							<li><Link to='/Portfolio'>PORTIFÓLIO</Link></li>
							<li><Link to='/Pricing'>PREÇOS</Link></li>
							<li><Link to='/Contact'>FALE CONOSCO</Link></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='jumbotron text-center'>
				<h1>Oliver Code</h1> 
				<p>Programação completa de seu site</p> 
				<form>
					<div className='input-group'>
						<input type='email' className='form-control' size='50' placeholder='Seu melhor email' required />
						<div className='input-group-btn'>
							<button type='button' className='btn btn-danger'>Enviar</button>
						</div>
					</div>
				</form>
			</div>
		</>
    );
}

export default Header;