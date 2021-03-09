import React, {Component} from "react"
import Todos from "./Todos"
import AddToDo from "./AddForm"
class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy milk"},
      {id:2, content: "play zelda"}
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter((todo) => {
      //remove element from todos if ID is matching by returning false for filter function
      return todo.id !== id 
    })
    //es6 allows us to write objects as one word if key = value
    this.setState({todos})
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    //creating new array not disturbing state directly
    let todos = [...this.state.todos, todo]
    this.setState({todos})
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center red-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddToDo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
