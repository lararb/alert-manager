import React from 'react';
import './App.css';
import Alert from './components/Alert';


class App extends React.Component { 

  constructor(props) {
    super(props);

    this.state = {
      arrAlert: [],
      color: '',
      disableBtn: false
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

    this.setState(prevState => {
      const newState = [...prevState.arrAlert,
        {fieldText: inputValue,
        idGenerated: this.getRandomInt(0, 100)
      }]

      return {
        arrAlert: newState
      }

    })

    this.handleChangeColor();
    this.handleDisableBtn();
  }

  handleChangeColor() {
    
      if(this.state.arrAlert.length <= 2) {
        this.setState({
          color: 'green'
        })
      } else if (this.state.arrAlert.length >= 2 && this.state.arrAlert.length <= 6) {
        this.setState({
          color: 'yellow'
        })
      } else {
        this.setState({
          color: 'red'
        })
      }
  }

  handleDisableBtn() {

    if(this.state.arrAlert.length >= 11) {
      this.setState({
        disableBtn: true
      })
    }

  }

  render() {

    return (
      <div className="App">
        <h1 className="title">Alert manager</h1>

        <section className="field_section">
          <label htmlFor="field">Alert text</label>
          <input id="field" name="field" type="text" className="field"/>
          <button className="field_btn" onClick={this.handleChangeState} disabled={this.state.disableBtn} >Add</button>
        </section>
        
        <ol className="alert_list">
          {this.state.arrAlert.map((item, index) =>
          <li className="alert_item" key={index} id={index}>
            <Alert fieldText={item.fieldText} idGenerated={item.idGenerated} color={this.state.color}/>
          </li>)}
        </ol>

      </div>
    );
  }
}

export default App;
