import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
//import uuid from 'uuid'; //Uncomment this import for static data unique id assignment

import './App.css';


class App extends React.Component {

  //Uncomment this section to use static todo items
  /*
  state = {
    todos: [
        {
            id: uuid.v4(),
            title: 'Take out the trash',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Cook breakfast',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Meeting with friends',
            completed: false
        }
    ]
}*/

//Get the Todo items from jsonplaceholder.com
state = {
  todos: []
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos:res.data}) )
}

//Toggle the completed state when the passed id match the todo list item id
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}

//Uncomment this section to use static Delete a Todo item
/*
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }); 
}*/

//Delete a Todo item using DELETE request to jsonplaceholder
delTodo = (id) => {
axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
.then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
}

//Uncomment this section to add a Todo item for static data
/*
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo] });
}*/

//Add a Todo item via POST request to jsonplaceholder
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: title,
    completed: false
  })
  .then(res => this.setState({todos: [...this.state.todos, res.data] }))
}

  render(){
  return (
    <Router>
    <div className="container">
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
        )} />
        <Route path="/about" component={About} />
      </div>
    </div>
    </Router>
  );
}
}
export default App;
 