import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <body>
    <center>
        <div className='hed'>
        <h1>TRANSPORT DETAILS</h1>
        </div>
        <div className='pic'>
        </div>
    <div className='container'>
        <Link to="Main"><a href='#'>POST</a><br></br><br></br></Link>
        <Link to="Update"><a href='#'>UPDATE</a><br></br><br></br></Link>
        <Link to="Del"><a href='#'>DELETE</a><br></br><br></br></Link>
        <Link to="Get"><a href='#'>GET</a></Link>
    </div>
    </center>
    </body>
  )
}

export default Home