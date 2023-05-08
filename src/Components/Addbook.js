import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import "../Components/Addbook.css"
import axios from "axios";

function Addbook() {
    const[title,setTitle]=useState("");
    const[author,setAuthor]=useState("");
    const[subject,setSubject]=useState("");
    const[publish_date,setPublishdate]=useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
          const timer = setTimeout(() => {
            setIsOpen(false);
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [isOpen]);
    const postData = async()=>{
        
        await axios.post("https://6444cbf3b80f57f581ab5240.mockapi.io/library",{
          title,author,subject,publish_date
        })
    
      }
      function sendalert(){
        setIsOpen(true);
        
      };
  return (
    
    <div>
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
          <Link to="/Repository" className="bolt" id="ginger"> Repository </Link>
          </li>
          <li className="nav-item" id="well">
          <Link to="/Cat" className="bolt" id="ginger"> Categories </Link>
          </li>
        </ul>
        
        
      </div>
      </div>
    
  </nav>
        <form className="row g-5" id="void" >
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label">Title</label>
          <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Title" value={title} onChange={event => setTitle
          (event.target.value)} />
        </div>
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label">Author</label>
          <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Author" value={author} onChange={event => setAuthor
          (event.target.value)} />
        </div>
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label">Subject</label>
          <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Subject" value={subject} onChange={event => setSubject
          (event.target.value)} />
        </div>
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label">Publish Date</label>
          <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Publish Date" value={publish_date} onChange={event => setPublishdate
          (event.target.value)} />
        </div>
        <button onClick={(e)=>{
            e.preventDefault();
            postData();
            sendalert();
        }}type="submit" className='btn btn-primary' id="fine" >AddBook</button>
        {isOpen && <div class="alert alert-success" role="alert">
  Registered in Repository Successfully
</div>}

        </form>
    </div>
  )
}

export default Addbook