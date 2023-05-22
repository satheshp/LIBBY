import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Home from './Home';
import Categories from "./Categories"
import Admin from "./Admin"
import "../Components/Repository.css";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import API_URL from "./Url";
import axios from "axios";
function Repository() {
    const [search,setSearch]=useState("")
   
    const[apiData,setAPIData]=useState([]);

    
    const pagination =paginationFactory({
      page:1,
      sizePerPage:5,
      lastPageText:'>>',
      firstPageText:'<<',
      nextPageText:'>',
      prePageText:'<',
      showTotal:true,
      alwaysShowAllBtns:true,
      onPageChange:function(page,sizePerPage){
        console.log('page',page);
        console.log('sizePerPage',sizePerPage);

      },
      onSizePerPageChange:function(page,sizePerPage){
        console.log('page',page);
        console.log('sizePerPage',sizePerPage);
      }
      
    });

    
    
    useEffect(() =>
    {
     fetch("https://6444cbf3b80f57f581ab5240.mockapi.io/library")   
     .then(response=>response.json())
     .then(result =>setAPIData(result))
     .catch(error =>console.log(error));
        
    },[]);
    const columns=[
      
        {dataField: "title",
        text: "Title",
        sort:true,
        filter:textFilter()
        },
        {dataField:"author",text:"Author",sort:true,filter:textFilter()},
        {dataField:"subject",text:"Subject",sort:true,filter:textFilter()},
        {dataField:"publish_date",text:"Publishdate",sort:true,filter:textFilter()}
      ];
  

    
       
      
    

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
        
        <form className="d-flex" role="search">
              <input className="form-control " type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            </form>
      </div>
    </div>
  </nav>
  {/* */}
        <BootstrapTable pagination={pagination} filter={filterFactory()} bootstrap4 keyField="id" columns={columns} data={apiData} condensed stripped hover/>
    
    </div>
  )


}

export default Repository
