import React, {Component} from 'react';

// provider //
import {Provider} from './context';

// components //
import Contacts from './components/Contacts';
import Header from './components/header';

import './App.css';
// bootstrap //
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {

    return (
      <Provider >
      <div className="App">
        <Header branding="Contact Manager  1" />
        {/* continer */}
        <div className="container">
          < Contacts />
        </div>
      
      </div>
      </Provider>
    );
  }
  
}

export default App;
