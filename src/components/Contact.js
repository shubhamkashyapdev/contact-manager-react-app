import React, { Component } from 'react';
import PropTypes from 'prop-types'
;

// import consumer //
import { Consumer } from '../context';



class Contact extends Component {
  state = {
    showContactInfo: false 
  };
  // methods //
  onClickDelete = (id,dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  }
 
  render() {
    

    const {name,email,phone,id} = this.props.contact;
    const {showContactInfo} = this.state;

    

    return (

      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3">
            <h4>{name} 
            <i
            style={{cursor: 'pointer'}}
            className="fas fa-sort-down"
            onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}
            ></i>
    
            {/* delete and edit icon */}
            <i 
             style={{cursor: 'pointer', color: 'red',float: 'right'}}
             onClick={this.onClickDelete.bind(this,id,dispatch)}
             className="fas fa-times"
            ></i>
            <i
             style={{cursor: 'pointer', color: 'green',float: 'right'}}
             className="fas fa-pencil"
             ></i>
    
            </h4>
            {showContactInfo ?  <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Ph No: {phone}</li>
            </ul> : null}
           
            
          </div>
          )
        }}
      </Consumer>


    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  
}

export default Contact;

