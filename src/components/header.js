import React from 'react';
import PropTypes from 'prop-types'
;



 const Header = (props) => {
   const {branding} = props;
  return (
   <nav className="navbar navbar-expand-sm navbar-dark py-0 bg-danger">
     <div className="container">
       <a href="/" className="navbar-brand">
         {branding}
       </a>
     </div>
     <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <a href="/" className="nav-link">Home
          </a>
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