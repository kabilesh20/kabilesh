import axios from "axios";
import React  from "react";
import { useState } from "react";
import './Del.css';
function Del() {
  const [search,setSearch]=useState("");
  const searchBook=(evt)=>{
          axios.delete('http://127.0.0.1:8080/delete/'+search)
          .then( alert("Deleted S.No: "+search))
          .catch(err=>console.log(err))
  }
return (
  <>
          <center><div className="container">
              <h2>DELETE TRANSPORT DETAILS</h2>
              <div>
                  <input type="text" placeholder="enter"  value={search} onChange={e=>setSearch(e.target.value)}/>
                  <br></br>
                  <br></br>
                <button onClick={searchBook}>DELETE</button>   
              </div>     
          </div>
          </center>
    
      </>
);
}

export default Del;