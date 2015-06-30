import alt from '../alt'
import TodoActions from '../actions/TodoActions'


class TodoStore {
  constructor() {
    this.todos = [ { id: 1, text: 'hello world!' } ]
    this.bindListeners({
      handleUpdateTodo: TodoActions.UPDATE_TODO
    })
  }

  handleUpdateTodo(todo) {
    this.todos.push(todo)
  }
}

export default alt.createStore(TodoStore, 'TodoStore')
