import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todo : '',
      todos : []
    }
  }
  changeHandler = (e) =>{
    this.setState({
      todo: e.target.value
    })
  }
  clickHandler = ()=>{
    this.setState({
      todos : [
        ...this.state.todos, this.state.todo
      ]
    })
  }
  render(){
    return(
      <div className='App'>
        <Input onclick = {this.clickHandler} todo = {this.state.todo} onblur={this.changeHandler}/>
        <ul style={{listStyle: 'none'}}>
        {
          this.state.todos.map(todo=><li>{todo}</li>)
        }
        </ul>
      </div>
    )
  }
}

export default App;
