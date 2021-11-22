import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Form from './Form';
import List from './List';
import Nav from './Nav';
import View from './View';
import Home from './Home';

function App() {


  return (
   <Router>
     <Nav/>
       <Routes>
       <Route path="/"  element={<Home/>} /> 
       <Route path="/list"  element={<List/>} /> 
       <Route path="/form"  element={<Form/>} /> 
       <Route path="/view" element={<View/>}/>
      </Routes>
    </Router>
  
  );
} 

export default App;
