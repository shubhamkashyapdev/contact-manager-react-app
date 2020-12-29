import React, { Component } from 'react';

// consumer //
import { Consumer } from '../../context';

// contact //
import Contact from './Contact';

class Contacts extends Component {
  


  render() {
    return (
      <Consumer>
        {value => {
          const {contacts} = value;
          return(
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              <hr></hr>
              {contacts.map(contact => (
              < Contact  key={contact.id}
              contact = {contact} 
              />
              ))} 
           </React.Fragment>
          )
        }}
      </Consumer>
    )
    
    
  }
}

export default Contacts;