import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home";
import Repository from './Components/Repository';
import Categories from './Components/Categories';
import Admin from './Components/Admin';
import Edition from "./Components/Edition";
import Addbook from './Components/Addbook';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />}/>

      <Route exact path="/Repository" element={<Repository />}/>
      <Route exact path="/Categories" element={<Categories />}/>
      <Route exact path="/Admin" element={<Admin />}/>
      <Route exact path="/Edition" element={<Edition />}/>

      <Route exact path="/Addbook" element={<Addbook />}/>

      
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

