import React ,{Component}from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    

    
      
      
   render(){
    return (
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark mb-3 py-0 first-nav" style={{backgroundColor: "#563d7c"}}>
            <div className="container">
            <a href="/" className="navbar-brand">My GRE Website</a>
            <div>
                <ul className="navbar-nav mr-auto" >
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                    <span style={{color:"white" }}>Home </span> 
                    </Link>
                    
                </li>

                <li className="nav-item">
                    <Link to="/word/add" className="nav-link">
                    <span style={{color:"white" }}>AddWord </span>
                    </Link>
                    
                </li>

                
                
                </ul>
            </div>
            </div>
        </nav>
    )

   }
}

export default Header