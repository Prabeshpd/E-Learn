import React from 'react';
import { hot } from 'react-hot-loader/root';

import TodoList from './TodoList/TodoList';

import '../styles/App.css';

const App = () => (
  <div>
    <TodoList />
  </div>
);

export default hot(App);
