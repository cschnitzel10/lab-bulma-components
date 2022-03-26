import "bulma/css/bulma.css";
import react from "react";

const Navbar = () => {
    return (<nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </a>
     
    </div>
  
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="#">
          Home
        </a>
  
        </div>
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
            <button class="button is-info">Login</button>
            </p>
            <button class="button is-primary">Signup</button>
          </div>
        </div>
      </div>
  </nav>);
  };



export default Navbar;