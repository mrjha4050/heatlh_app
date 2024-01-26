import React, { Component } from 'react';
import './Components.css';
import './Successfullyregistered.jsx';
import Successfullyregistered from './Successfullyregistered.jsx';
import { auth } from './firebase';


class Signupform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  handleSignUp = async (event) => {
    event.preventDefault();

    const { email, phone, password, confirmPassword } = this.state;

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }

      // Create user with email and password
      await auth.createUserWithEmailAndPassword(email, password, confirmPassword);

      // If successful, reset form and handle success state
      this.setState({
        email: '',
        password: '',
        confirmPassword: '',
      });

      this.props.register();
    } catch (error) {
      // Handle error, you can set an error message in state and display it
      console.error('Error signing up:', error.message);
    }
  };

  render() {
    return (
      <>
        {this.props.isRegistered ? <Successfullyregistered switch={this.props.switch} /> : ''}
        <br />
        <br />
        <div className='sucontainer'>
          <form onSubmit={this.handleSignUp}>
            <p className='sisuheading'>Create Your Account</p>
            <p className='suinputheading'>Email:</p>
            <input
              required
              name='email'
              type='email'
              className='suinput'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
           
            <p className='suinputheading'>Password:</p>
            <input
              required
              name='password'
              type='password'
              className='suinput'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <p className='suinputheading'>Confirm Password:</p>
            <input
              required
              name='confirmPassword'
              type='password'
              className='suinput'
              placeholder='Confirm your Password'
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
            <button type='submit' className='sisibtn'>
              Sign up
            </button>
          </form>
          <div>
            <div className='siorline'></div>
            <div className='sior'>or</div>
            <div className='siorline'></div>
          </div>
          <button className='sigmailbtn'>Sign Up using Gmail</button>
          <button className='sifbbtn'>Sign Up using Facebook</button>
          <div className='siaskacc'>
            Already have an account? <a href='/LOGIN.jsx' onClick={this.props.switch}> Sign In</a>
          </div>
        </div>
      </>
    );
  }
}

export default Signupform;
