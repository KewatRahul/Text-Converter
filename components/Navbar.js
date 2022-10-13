import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
  
    
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/"}>Text Converter</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/About"}>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/Contact"}>Contact</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>  
        
        
      
  )
}

export default Navbar;
