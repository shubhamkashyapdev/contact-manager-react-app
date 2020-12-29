import React, { Component } from 'react';
import PropTypes from 'prop-types'
;
import axios from 'axios';
import {Link} from 'react-router-dom';
// import consumer //
import { Consumer } from '../../context';



class Contact extends Component {
  state = {
    showContactInfo: false 
  };
  // methods //
  onClickDelete = async (id,dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
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
            style={{cursor: 'pointer',marginLeft:'.5rem'}}
            className="fas fa-sort-down"
            onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}
            ></i>
    
            {/* delete and edit icon */}
            <Link to={`contact/edit/${id}`}>
             <i
              style={{cursor: 'pointer', color: 'green',float: 'right',marginLeft:'1.5rem'}}
              className="fas fa-pencil-alt"
             ></i>
            </Link>

            <i 
             style={{cursor: 'pointer', color: 'red',float: 'right'}}
             onClick={this.onClickDelete.bind(this,id,dispatch)}
             className="fas fa-times"
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

