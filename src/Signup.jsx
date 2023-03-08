import React, { Component } from 'react'
import axios from 'axios';
import './Signup.css'
export class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            username:'',
            email:'',
            password:''
        };
        
    }
    handleIdChange = (event) => {
        this.setState({ id: event.target.value });
    };
    handleNameChange = (event) => {
        this.setState({ username: event.target.value });
    };
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            
        };
        axios.post('http://127.0.0.1:8080/post', data)
    };

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="sign-form">
        <div className="row">
        <label>Id</label><br></br>
        <input
          type="number"
          value={this.state.id}
          onChange={this.handleIdChange}
        />
        </div>
        <div className='row'>
        <label>UserName</label><br></br>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleNameChange}
        />
        </div>
        <div className='row'>
        <label>Email</label><br></br>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        </div>
        <div className='row'>
        <label >Password</label><br></br>
        <input
          className="login-input"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        </div>
        <br></br>
        <button className="login-button" type="submit">
          Sign Up
        </button>
      </form>
    )
  }
}

export default Signup