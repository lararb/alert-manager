import React from 'react';
import './App.css';
import AlertManager from './components/AlertManager';


class App extends React.Component { 

  constructor(props) {
    super(props);

    this.state = {
      arrAlert: [],
      color: '',
      disableBtn: false,
      deleteAlert: false
    }

    this.handleClickAdd = this.handleClickAdd.bind(this);
    //this.handleDeleteAlert = this.handleDeleteAlert.bind(this);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

 
  handleClickAdd() {
    const inputValue = document.getElementById('field').value;

    this.setState(prevState => {
      const newState = [...prevState.arrAlert,
        {fieldText: inputValue,
        idGenerated: this.getRandomInt(0, 1000)
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

  // handleDeleteAlert(event) {
  //   const currentBtn = event.currentTarget;
  //   console.log(currentBtn);
  //   this.setState({
  //     deleteAlert: true
  //   })

  //   if(currentBtn.id === currentBtn.parentElement.id) {

  //   }
  // }

  render() {
    const {arrAlert, color, deleteAlert, disableBtn} = this.state;

    return (
      <div className="App">
        <AlertManager arrAlert={arrAlert} color={color} disableBtn={disableBtn} deleteAlert={deleteAlert} clickAdd={this.handleClickAdd} clickDelete={this.handleDeleteAlert}/>
      </div>
    );
  }
}

export default App;
