import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Home from './Home';
import Categories from "./Categories"
import Admin from "./Admin"
import "../Components/Edition.css";
import {Table,Button} from 'semantic-ui-react';
import Addbook from './Addbook';

// import API_URL from "./Url";
import axios from "axios";
function Edition() {
    const [search,setSearch]=useState("")
    
    const[apiData,setAPIData]=useState([]);

    const deleteUser= async(id) =>{
        console.log(id)
        await axios.delete(`https://6444cbf3b80f57f581ab5240.mockapi.io/library/${id}`)
        console.log("id")
        fetch("https://6444cbf3b80f57f581ab5240.mockapi.io/library")   
     .then(response=>response.json())
     .then(result =>setAPIData(result))
     .catch(error =>console.log(error));
      }
    
      
    
    
    useEffect(() =>
    {
     fetch("https://6444cbf3b80f57f581ab5240.mockapi.io/library")   
     .then(response=>response.json())
     .then(result =>setAPIData(result))
     .catch(error =>console.log(error));
        
    },[]);
   
      
    

  return (
    <div className='repository'>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">My Libby</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item" id="well">
          <Link to="/" className="bolt" id="ginger"> Home </Link>
          </li>
          
          <li className="nav-item" id="well">
          <Link to="/Categories" className="bolt" id="ginger"> Categories </Link>
          </li>
          <li className="nav-item" id="well">
          <Link to="/Admin" className="bolt" id="ginger"> Admin Login </Link>
          </li>
        </ul>
        
        <Link to="/Addbook" class="navbar-text" id="ginger">
        <div className='icons'><i class="fa fa-plus" ></i> <h5>Add Book</h5></div>
    </Link>
      </div>
    </div>
  </nav>
 
        <table className="table table-striped table-info" >
  <thead>
    <tr >
      
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Subject</th>
      <th scope="col">Publish-date</th>
      <th scope="col">Delete</th>

      
    </tr>
  </thead>
  <tbody>
  {
  
  apiData && apiData.length>0 ? 
  apiData.map(usr =>
    <tr key={usr.id}>
      <td>{usr.title}</td>
      <td>{usr.author}</td>
      <td>{usr.subject}</td>
      <td>{usr.publish_date}</td>
      <Table.Cell>
        <Button className='btn btn-danger' onClick={()=>
      
      deleteUser(usr.id)
      }>Delete</Button>
      </Table.Cell>
    </tr>
    )
            :'Loading'  
           
   }
  
    
  </tbody>
</table>
    </div>
  )


}

export default Edition
