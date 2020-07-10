import React, { Component } from 'react';


class AddTodo extends Component {
  state={
    content:''
     
  }
  handleChange=(e)=>{
         this.setState({
             content:e.target.value
         })
  }
  handleSubmit=(e)=>{
      e.preventDefault();
      if(this.state.content===''){alert("can't add empty content")}
      else{   this.props.addTodo(this.state);
        this.setState({content:''})}
    
  }
  render(){
      return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <input type='text'  onChange={this.handleChange} value={this.state.content} />
            <button type='submit' className='btn blue lighten-0 z-depth-1' style={{padding:""}} >Add Todo</button>
        </form>
    </div>
      )

  }
}

export default AddTodo