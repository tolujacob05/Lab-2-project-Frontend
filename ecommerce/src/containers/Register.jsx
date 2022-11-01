import React from 'react';
import loginImg from './login.svg';
import './App.scss';




export class Register extends React.Component {


    constructor (props) {
        super(props);
    }

            render()  {
                
                return <div className='base-container'>
				
				             <div className="header">Register</div>
                
                            <div className="content">
                    
                            <div className='image'>
                                <img src={loginImg} />
                                
                            </div>
                                <div className="form">


                                <div className="form-group">
                                        <label htmlFor='username'>Username</label>
                                        <input type="text" name="username" placeholder='Username' />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor='email'>Email</label>
                                        <input type="email" name="email" placeholder='Email' />
                                    </div>

                                    <div className='form-group'>
                                            <label htmlFor='Phone Number' >Phone Number</label>
                                            <input type="text" name='Phone Number' placeholder='Phone Number' /> 
                                            
                                    </div>

                                    

                                    <div className="form-group">
                                        <label htmlFor='password'>Password</label>
                                        <input type="password" name="password" placeholder='Password' />
                                    </div>

                                </div>
                </div>

                                <div className='footer'>
                                    <button type='button' className='btn'> Register </button>
                                </div>
            </div>


	

			


	


    }

}

export default Register;


