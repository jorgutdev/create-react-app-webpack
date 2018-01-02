import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Paste here your input.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>BOWS Simulator</h2>
        </div>

        <form onSubmit={this.handleSubmit} action='/go' method='post' name='contact_form' >
          <div className='form-container'>
            <div className='text-area-container'>
              <textarea onChange={this.handleChange} className='text-area' placeholder={this.state.placeholder} name='text-area' id='text-area' />
            </div>
            <div className='select-file-container'>
              <label className='select-file-label'>
                Upload your .csv file
              </label>
              <input type='file' id='file' name='file' />
            </div>

            <div className='submit-container'>
              <div>
                <label className='submit-button-label'>
                  Send to => ZOOM ( APP betax.zoom )
              </label>
                <input type='submit' />
              </div>
              <div>
                <label className='submit-button-label'>
                  Send to => SUI ( APP betax.sui )
              </label>
                <input type='submit' />
              </div>
            </div>
          </div>
        </form>


      </div>
    );
  }
}

export default App;