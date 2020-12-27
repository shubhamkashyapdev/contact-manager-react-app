import React, { Component } from 'react';
const Context = React.createContext();

const Reducer = (state,action) => {
  switch(action.type){

    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
  }
}

export class Provider extends Component {
  state = {
    contacts: [
        {
          id: 1,
          name:"John doe ",
          email: "Jdoe@gmail.com",
          phone: "123-456-089"
        },
        {
          id: 2,
          name:"Karen ",
          email: "Karen@gmail.com",
          phone: "123-456-709"
        },
        {
          id: 3,
          name:"Harry ",
          email: "Harry@gmail.com",
          phone: "123-456-780"
        },
      ],
      dispatch: action => {
        this.setState(state => Reducer(state,action));
      }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

