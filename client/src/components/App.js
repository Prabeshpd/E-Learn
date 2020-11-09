import React from 'react';
import { hot } from 'react-hot-loader/root';

import TodoList from './TodoList';
import TaskInput from './TaskInput';
import Header from '@Components/common/Header';

import '../styles/App.css';

const App = () => (
  <div className="app-container">
    <Header />
    <TodoList />
    <TaskInput />
  </div>
);

export default hot(App);
