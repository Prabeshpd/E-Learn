import React from 'react';
import { hot } from 'react-hot-loader/root';

import Header from '@Components/common/Header';

import TodoList from './TodoList';
import TaskInput from './TaskInput';

import '../styles/App.css';

const App = () => (
  <div className="app-container">
    <Header />
    <TodoList />
    <TaskInput />
  </div>
);

export default hot(App);
