import React, { Component } from 'react';
import './App.css';
import Info from './components/info';
import EstimateForm from './components/estimateForm';

class App extends Component {
  state = { 
    showForm : false
   }

   handleShowEstimateForm = evt => {
    console.log(evt);
    this.setState({ showForm: !this.state.showForm });
   };

  render() {
    return (
      <React.Fragment>
      <Info onHandleShowEstimateForm={this.handleShowEstimateForm}/>
      <br/>
      {this.state.showForm && <EstimateForm/>}
      </React.Fragment>
    );
  }
}

export default App;