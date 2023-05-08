import React,{useState} from 'react'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../Components/firebase";
import {Link,useNavigate} from "react-router-dom";
import "../Components/Admin.css"
import Edition from "./Edition"

function Admin() {
    const [showAlert,setShowAlert]=useState("")
    const [email,setEmail]=useState('');
    const [error, setError] = useState(null);
     const [password,setPassword]=useState('');
     const navigate=useNavigate();

     const signIn=async(e)=>{
      e.preventDefault();
      if (email === 'satheshkumarg.20ece@kongu.edu' && password === 'devrev') {
        try {
          // Sign in the user with Firebase Authentication
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log(`Logged in as ${user.email}`);
            navigate('/Edition')
          setError(null);
        } catch (error) {
          console.error(error);
          setError('Invalid email or password');
        }
      } else {
        setError('Invalid email or password');
      }
     }
  return (
    <div className="main">
        
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
          <Link to="/Categories" className="bolt" id="ginger"> Repository </Link>
          </li>
          <li className="nav-item" id="well">
          <Link to="/Admin" className="bolt" id="ginger"> Categories </Link>
          </li>
        </ul>
        
        
      </div>
      </div>
    
  </nav>
  

    

<body>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="login-form">
          <h2 className="text-center mb-4">Admin Login</h2>
          <form>
            <div className="form-group">
              <label >Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <button type="submit" onClick={signIn}className="btn btn-block btn-login">Sign In</button>
          </form>
        </div>
        <p>Email:satheshkumarg.20ece@kongu.edu</p>
        <p>password:devrev</p>
      </div>
    </div>
  </div>
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>


     
  

    </div>
    
    
  )
}

export default Admin