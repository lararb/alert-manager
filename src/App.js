import React from 'react';
import './App.css';
import AlertManager from './components/AlertManager';


class App extends React.Component { 

  constructor(props) {
    super(props);

    this.textInput = React.createRef();

    this.state = {
      arrAlert: [],
      disableBtn: false
    }

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleDeleteAlert = this.handleDeleteAlert.bind(this);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
 
  handleClickAdd() {
    const inputValue = this.textInput.current.value;

    this.setState(prevState => {
      const newState = [...prevState.arrAlert,
        {fieldText: inputValue,
        idGenerated: this.getRandomInt(0, 1000)
        }]

      return {
        arrAlert: newState
      }
    })
  }

  setChangeColor(arr) {
    if(arr.length <= 3) {
      return ('green');
    } else if (arr.length >= 4 && arr.length <= 7) {
      return ('yellow');
    } else {
      return ('red');
    }
  }

  handleDisableBtn(arr) {

    if(arr.length >= 12) {
     return true
    }
  }

  handleDeleteAlert(event) {
    const btnParent = event.currentTarget.parentElement;

    this.setState(prevState => {

      prevState.arrAlert.splice(btnParent.id, 1);

      return {
        arrAlert: prevState.arrAlert
     }
    })
  }


  render() {
    const {arrAlert} = this.state;

    return (
      <div className="App">
        <AlertManager arrAlert={arrAlert} color={this.setChangeColor(arrAlert)} disableBtn={this.handleDisableBtn(arrAlert)} clickAdd={this.handleClickAdd} clickDelete={this.handleDeleteAlert} textInput={this.textInput}/>
      </div>
    );
  }
}

export default App;
