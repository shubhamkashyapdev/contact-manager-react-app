import React, {Component} from 'react';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';

// provider //
import {Provider} from './context';

// components //
import Contacts from './components/contacts/Contacts';
import About from './components/pages/about';
import Header from './components/layouts/header';
import AddContact from './components/contacts/addContact';
import EditContact from './components/contacts/editContact';
import Test from './components/Test/Test';

import NotFound from './components/pages/notFound';

import './App.css';
// bootstrap //
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {

    return (
      <Provider>
        <Router>
          <div className="App">
          <Header branding="Contact Manager" />
          <div  className="container mb-5">

    
          <Switch>
            
             <Route exact path="/" component={Contacts} />
            
            <Route exact path="/contact/add" component={AddContact} />

            <Route exact path="/contact/edit/:id" component={EditContact} />

            <Route exact path="/about" component={ About } />

            <Route exact path="/test" component={Test} />

            <Route component={NotFound}></Route>
          </Switch>

          </div>
        
         </div>
        </Router>
      
      </Provider>
    );
  }
  
}

export default App;
