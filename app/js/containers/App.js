import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import FormBuilderContainer from './FormBuilder/FormBuilderContainer';
import FormContainer from './Form/FormContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <Route path='/' exact component={FormBuilderContainer} />
        <Route path='/form' exact component={FormContainer} />
      </div>
    );
  }
}



export default App;