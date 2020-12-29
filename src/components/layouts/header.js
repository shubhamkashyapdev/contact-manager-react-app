import React from 'react';
import PropTypes from 'prop-types'
;

import { Link } from 'react-router-dom';



 const Header = (props) => {
  
   const {branding} = props;
  return (
   <nav className="navbar navbar-expand-sm navbar-dark py-3 bg-danger">
     <div className="container">
       <a href="/" className="navbar-brand" style={{fontSize:'1.5rem'}}>
         {branding}
       </a>
     </div>
     <ul className="navbar-nav mr-auto" style={{fontSize:'1.3rem'}}>
        <li className="navbar-item">
         <Link to="/" className="nav-link">
           <i className="fas fa-home"></i>
           Home</Link>
        </li>
        
        <li className="navbar-item">
         <Link to="/about" className="nav-link">
           <i className="fas fa-question">About</i></Link>
        </li>

        <li className="navbar-item">
         <Link to="/contact/add" className="nav-link">
         <i class="far fa-address-book">
           Add Contact
         </i>
           </Link>
        </li>
     </ul>
   </nav>
  )
}

// const HeadingStyle = {
//   color: 'dodgerblue',
//   display: 'flex',
//   justifyContent: 'center',
//   fontSize: '4rem'
// }

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

Header.defaultProps = {
  brandign: "My React App"
}
export default Header;