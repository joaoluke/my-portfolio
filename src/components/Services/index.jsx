import React from 'react';

const Services = props => {
    return (
        <div id='services' className='container-fluid text-center'>
			<h2>SERVIÇOS</h2>
			<h4>Um pouco sobre nossas competências:</h4>
			<br />
			<div className='row '>
				<div className='col-sm-4'>
                         <span className='fas fa-laptop-code logo-small'></span>
                         <h4>FRONT-END</h4>
                         <p>Seu site com uma aparência única.</p>
				</div>
				<div className='col-sm-4'>
                         <span className='fas fa-cog logo-small'></span>
                         <h4>SUPORTE</h4>
                         <p>Suporte caso sistema falhe.</p>
				</div>
				<div className='col-sm-4'>
                         <span className='fas fa-server logo-small'></span>
                         <h4>BACK-END</h4>
                         <p>Seu site seguro, dinâmico e ágil.</p>
				</div>
			</div>
			<br/>
			<div className='row '>
				<div className='col-sm-4'>
                         <span className='fas fa-briefcase logo-small'></span>
                         <h4>PROFISSIONALISMO</h4>
                         <p>Trabalho profissional e com discrição.</p>
				</div>
				<div className='col-sm-4'>
                         <span className='glyphicon glyphicon-ok logo-small'></span>
                         <h4>GARANTIA</h4>
                         <p>Satisfação garantida.</p>
				</div>
				<div className='col-sm-4'>
                         <span className='glyphicon glyphicon-wrench logo-small'></span>
                         <h4 style={{color:'#303030'}}>MANUTENÇÃO</h4>
                         <p>Manutenção em seu site ja feito.</p>
				</div>
			</div>
		</div>
    );
}

export default Services;