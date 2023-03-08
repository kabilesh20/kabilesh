import React, { Component } from 'react'
import axios from 'axios';
import './Update.css';
import { Link } from 'react-router-dom';
export class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            sno:'',
            vehicleNo:'',
            date:'',
            driverName:'',
            source:'',
            destination:'',
            price:''
        };
        
    }
    handleSnoChange = (event) => {
        this.setState({ sno: event.target.value });
    };
    handleVehicleNoChange = (event) => {
        this.setState({ vehicleNo: event.target.value });
    };
    handleDateChange = (event) => {
        this.setState({ date: event.target.value });
    };
    handleDriverNameChange = (event) => {
        this.setState({ driverName: event.target.value });
    };
    handleSourceChange = (event) => {
        this.setState({ source: event.target.value });
    };
    handleDestinationChange = (event) => {
        this.setState({ destination: event.target.value });
    };
    handlePriceChange = (event) => {
        this.setState({ price: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            sno: this.state.sno,
            vehicleNo: this.state.vehicleNo,
            date: this.state.date,
            driverName: this.state.driverName,
            source: this.state.source,
            destination: this.state.destination,
            price: this.state.price,
        };
        axios.post('http://127.0.0.1:8080/post', data)
    };

  render() {
    return (
        <body>
        <form onSubmit={this.handleSubmit} className="sign-form">
            <h1>Update Transport Details</h1>
        <div className="row">
        <label>S.NO</label><br></br>
        <input
          type="number"
          value={this.state.sno}
          onChange={this.handleSnoChange}
        />
        </div>
        <div className="row">
        <label>VechicleNo</label><br></br>
        <input
          type="text"
          value={this.state.vehicleNo}
          onChange={this.handleVehicleNoChange}
        />
        </div>
        <div className='row'>
        <label>Date</label><br></br>
        <input
          type="text"
          value={this.state.date}
          onChange={this.handleDateChange}
        />
        </div>
        <div className='row'>
        <label>DriverName</label><br></br>
        <input
          type="text"
          value={this.state.driverName}
          onChange={this.handleDriverNameChange}
        />
        </div>
        <div className='row'>
        <label >Source</label><br></br>
        <input
          className="login-input"
          type="text"
          value={this.state.source}
          onChange={this.handleSourceChange}
        />
        </div>
        <div className='row'>
        <label >Destination</label><br></br>
        <input
          className="login-input"
          type="text"
          value={this.state.destination}
          onChange={this.handleDestinationChange}
        />
        </div>
        <div className='row'>
        <label >Price</label><br></br>
        <input
          className="login-input"
          type="number"
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        </div>
        <br></br>
        <button className="login-button" type="submit">
          UPDATE
        </button>
        <br></br>
        <br></br>
        <Link to="/Get"><button className='login-button1' type='submit'>SHOW DETAILS</button></Link>
        <br></br>
        <br></br>
        <Link to="/Del"><button className='login-button1' type='submit'>DELETE DETAILS</button></Link>
      </form>
      </body>
    )
  }
}

export default Update