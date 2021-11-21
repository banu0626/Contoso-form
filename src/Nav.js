import './App.css';
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
function Nav() {
    let location = useLocation();
    // console.log(location);
  return (
    <nav>
        <label>Contoso Bank</label>
        <ul>
        <li><Link to="/" className={location.pathname==='/'?"active":''}>Home</Link></li>
       <li><Link to="/list" className={location.pathname==='/list'?"active":''}>View Applications</Link></li>
       <li><Link to="/form" className={location.pathname==='/form'?"active":''}>New Application</Link></li>
    </ul>
  </nav>
  );
}

export default Nav;
