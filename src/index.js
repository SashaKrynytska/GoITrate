import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GoitRate from './components/GoitRate';
// import AddTodo from './components/AddTodo';
// import TodoList from 'components/TodoList';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoitRate />
    <App />

    {/* <AddTodo />
    <TodoList /> */}
  </React.StrictMode>
);
