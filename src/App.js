import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
class App extends Component {
  state={
    todos:[
      {id:1, content:'Buy Some milk.'},
      {id:2, content:'Wake Up early in the morning.'}
    ]
  }
  delete=(id)=>{
    const filterTodo=this.state.todos.filter((el)=>{
      return id!==el.id
    })
    this.setState({
      todos:filterTodo
    })
  }
  addTodo=(newTodo)=>{
      newTodo.id=Math.random()
      let todos=[...this.state.todos,newTodo];
      this.setState({todos})
  }
  render(){
    return (
      <div className="App container">
      <h1 className='centre blue-text'>Todo's</h1>
       <Todo    todos={this.state.todos}  delete1={this.delete}/>
       <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
  }
 

export default App;
