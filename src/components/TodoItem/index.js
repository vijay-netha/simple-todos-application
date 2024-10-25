import {Component} from 'react'
import './index.css'
class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }
  onClickEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  onClickSave = () => {
    this.setState({editing: false})
  }

  onClickChange = event => {
    this.setState({updatedTitle: event.target.value})
  }
  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.onClickChange}
              required
            />
            <button onClick={this.onClickSave} type="button" className="button">
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
            />
            <p className="title">{todoDetails.title}</p>
            <button onClick={this.onClickEdit} type="button" className="button">
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todoDetails.id)}
              type="button"
              className="delete-btn"
            >
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}
export default TodoItem