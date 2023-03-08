import axios from "axios";
import React, { Component } from "react";
import './Get.css'
class Get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <body>
            
       <center>
        <h1>TRANSPORT DETAILS</h1> 
    <div className="full">
      <table className="table-fill">
      <thead>
        <tr>
          <th className="text-left">SNO</th>
          <th className="text-left">VehicleNo</th>
          <th className="text-left">Date</th>
          <th className="text-left">DriverName</th>
          <th className="text-left">Source</th>
          <th className="text-left">Destination</th>
          <th className="text-left">Price</th>
        </tr>
      </thead>
      <tbody className="table-hover">
        {this.state.data.map(user => (
          <tr key={user.sno}>
            <td className="text-left">{user.sno}</td>
            <td className="text-left">{user.vehicleNo}</td>
            <td className="text-left">{user.date}</td>
            <td className="text-left">{user.driverName}</td>
            <td className="text-left">{user.source}</td>
            <td className="text-left">{user.destination}</td>
            <td className="text-left">{user.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </center>
    </body>
    );
  }}
  
export default Get;