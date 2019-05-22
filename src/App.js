import React from 'react';
import './App.css';
import Alert from './components/Alert';

const arrAlert = []

class App extends React.Component { 

  constructor(props) {
    super(props);

    this.state = {
      fieldText: false,
      idGenerated: false
    }

    this.handleChangeState = this.handleChangeState.bind(this);

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

 
  handleChangeState() {
    const inputValue = document.getElementById('field').value;

    this.setState({
      fieldText: inputValue,
      idGenerated: this.getRandomInt(0, 100)
    })
    this.handleAddAlert();
  }

  handleAddAlert() {
    arrAlert.innerHTML = '';
    arrAlert.push(<Alert fieldText={this.state.fieldText} idGenerated={this.state.idGenerated}/>);
    console.log(arrAlert);
  }

  render() {

    return (
      <div className="App">
        <h1 className="title">Alert manager</h1>

        <section className="field_section">
          <label htmlFor="field">Alert text</label>
          <input id="field" name="field" type="text" className="field"/>
          <button className="field_btn" onClick={this.handleChangeState} >Add</button>
        </section>
        
        <ul className="alert_list">
          {arrAlert.map((item, index) => <li className="alert_item" key={index} id={index}>{item}</li>)}
        </ul>

      </div>
    );
  }
}

export default App;
