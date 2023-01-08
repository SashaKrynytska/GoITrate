import * as React from 'react';
import AddTodo from './components/AddTodo';
// import GoitRate from 'components/GoitRate';
import TodoList from 'components/TodoList';
import { nanoid } from 'nanoid';

// const todoItem = {
//   id: '123',
//   text: 'Learn React',
//   status: 'new',
// };

const TODO_STATUS = {
  NEW: 'new',
  DONE: 'done',
};
class App extends React.Component {
  state = {
    todos: [],
  };

  // будемо створювати в стейті новий е, куди буде йти новий масив (імутабельність)

  addNewTodo = todoValue => {
    this.setState({
      todos: [
        ...this.state.todos,
        // в якості другого аргумента передаємо todoItem але деструктуруємо його
        { id: nanoid(), text: todoValue, status: TODO_STATUS.NEW },
      ],
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <AddTodo onAddTodo={this.addNewTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
