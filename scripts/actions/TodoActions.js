import alt from '../alt'

class TodoActions {
  updateTodo(todo) {
    this.dispatch(todo)
  }
}

export default alt.createActions(TodoActions)
