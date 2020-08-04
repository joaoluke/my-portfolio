import React from 'react';
import Location from '../images/image.png';

const Contact = () => {
    return (
        <div>
            <div id='contact' className='container-fluid bg-grey'>
                <h2 className='text-center'>CONTATO</h2>
                <div className='row'>
                    <div className='col-sm-5'>
                        <p>Entre em contato e entraremos em contato em 24 horas.</p>
                        <p><span className='glyphicon glyphicon-map-marker'></span> Florianópolis, SC</p>
                        <p><span className='glyphicon glyphicon-phone'></span> +55 48 9-99610-5681</p>
                        <p><span className='glyphicon glyphicon-envelope'></span> olivercode@code.com</p>
                    </div>
                    <div className='col-sm-7 '>
                        <div className='row'>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='name' name='name' placeholder='Nome' type='text' required />
                            </div>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
                            </div>
                        </div>
                        <textarea className='form-control' id='comments' name='comments' placeholder='Sua Mensagem' rows='5'></textarea><br />
                        <div className='row'>
                            <div className='col-sm-12 form-group'>
                                <button className='btn btn-default pull-right' type='submit'>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Location} className='w3-image w3-greyscale-min' style={{width:'100%'}} />
        </div>
    );
}

export default Contact;