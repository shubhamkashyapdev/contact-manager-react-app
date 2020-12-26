import React, { Component } from 'react';

// consumer //
import { Consumer } from '../context';

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