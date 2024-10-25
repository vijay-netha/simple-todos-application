import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'


class SimpleTodos extends Component {
  state = {
    todosList: [
      {id: 1, title: 'Book the ticket for today evening', completed: false},
      {
        id: 2,
        title: 'Rent the movie for tomorrow',
        completed: false,
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session',
        completed: false,
      },
      {id: 4, title: 'Drop the parcel at the Shop', completed: false},
      {id: 5, title: 'Order fruits on Big Basket', completed: false},
      {id: 6, title: 'Fix the production issue', completed: false},
    ],
    newTodoTitle: '',
    newTodoCount: 1,
  }
  onClickAddTodo = () => {
    const {newTodoTitle, newTodoCount} = this.state
    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitle,
      completed: false,
    }))
    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodoTitle: '',
      newTodoCount: 1,
    }))
  }
  onClickChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.filter(todo => todo.id !== id)
    this.setState({todosList: updatedTodoList})
  }
  toggleComplete = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todosList: updatedTodoList})
  }
  render() {
    const {todosList, newTodoTitle, newTodoCount} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo">
            <input
              type="text"
              name="newTodoTitle"
              value={newTodoTitle}
              onChange={this.onClickChange}
              placeholder="Enter todo title"
              className="input"
            />
            <input
              type="number"
              name="newTodoCount"
              value={newTodoCount}
              onChange={this.onClickChange}
              placeholder="Enter number of todos"
              className="input"
            />
            <button
              onClick={this.onClickAddTodo}
              type="button"
              className="button"
            >
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos