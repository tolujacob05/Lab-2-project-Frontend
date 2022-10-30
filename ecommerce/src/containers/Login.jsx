import React from 'react';
import loginImg from './login.svg'
import './App.scss';









export class Login extends React.Component {


    constructor (props) {
        super(props);
    }

            render()  {
                
     return <div className="base-container" ref={this.props.containerRef} >

                        
                        <div className="header"> Log in. </div>
                        
                        
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
                                        <label htmlFor='password'>Password</label>
                                        <input type="password" name="password" placeholder='Password' />
                                    </div>

                          </div>

                    </div>

                                    <div className='footer'>
                                        <button type='button' className='btn'> Sign In</button>
                                        <p>Don't have an account?Sign up.</p>
                                    </div>
            </div>


            }

    }





    export default Login;
