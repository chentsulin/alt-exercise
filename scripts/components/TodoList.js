import React from 'react'
import connectToStores from 'alt/utils/connectToStores'
import TodoStore from '../stores/TodoStore'


@connectToStores
class TodoList extends React.Component {

  static getStores(props) {
    return [TodoStore]
  }

  static getPropsFromStores(props) {
    return TodoStore.getState()
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <li key={todo.id}>{todo.text}</li>
          );
        })}
      </ul>
    )
  }
}


export default TodoList
