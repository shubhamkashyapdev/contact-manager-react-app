import React, { Component } from 'react'
import { Consumer } from '../../context';
// import {v1 as uuid } from 'uuid';
import axios from 'axios';

import TextInputgroup from '../layouts/TextInputGroup';

class AddContact extends Component {
  state = {
    name:'',
    email: '',
    phone: '',
    errors:{}
  }
  onChange = (e) => this.setState({[e.target.name]:e.target.value});

  onSubmit = async (dispatch,e) => {
    e.preventDefault();

    const {name,email,phone} = this.state;
     // check for error //
     if(name === ''){
      this.setState({errors: {name: 'Name is required'}});
      return;
    }
    if(email === ''){
      this.setState({errors: {email: 'Email is required'}});
      return;
    }
    if(phone === ''){
      this.setState({errors: {phone: 'Phone is required'}});
      return;
    }

    const newContact = {
      name,
      email,
      phone
    }

    const res = await axios.post('https://jsonplaceholder.typicode.com/users',newContact);
    dispatch({type:'ADD_CONTACT',payload:res.data});

    // dispatch({type: "ADD_CONTACT",payload: newContact});

    // clear fields //
    this.setState({
      name:'',
      email:'',
      phone:'',
      errors:{}
    });

    // Redirect after submission //
    this.props.history.push('/');
  }

  render() {
    const {name,email,phone,errors} = this.state;
   

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
        return(
          <div className="card mb-3">
         <div className="card-header">
           Add Contact
         </div>
         <div className="card-body">
           <form onSubmit={this.onSubmit.bind(this,dispatch)}>
             {/* name */}
             <TextInputgroup
             label="Name"
             placeholder="Enter Name"
             value={name}
             name="name"
             onChange={this.onChange}
             error={errors.name}
             />

             
             {/* email */}
             <TextInputgroup
             label="Email"
             placeholder="Enter Email"
             type="email"
             value={email}
             name="email"
             onChange={this.onChange}
             error={errors.email}
             />
             {/* phone */}
             <TextInputgroup
             label="Phone"
             placeholder="Enter Phone"
             value={phone}
             name="phone"
             onChange={this.onChange}
             error={errors.phone}
             />

             <input type="submit" className="btn btn-block btn-light"></input>
           </form>
         </div>
      </div>
        )
      }}
      </Consumer>
      
    )


    
  }
}


export default AddContact;