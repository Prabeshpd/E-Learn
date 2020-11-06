import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

import Todo from './Todo';

import listIcon from '../../assets/list.png';

const TodoList = () => {
  const todoItems = [
    {
      id: 1,
      task: 'Dolor eiusmod consectetur exercitation exercitation minim magna sit.',
      completed: true,
    },
    {
      id: 2,
      task: 'Dolor eiusmod consectetur exercitation exercitation minim magna sit.',
      completed: false,
    },
    {
      id: 3,
      task: 'Dolor eiusmod consectetur exercitation exercitation minim magna sit.',
      completed: false,
    },
    {
      id: 4,
      task: 'Dolor eiusmod consectetur exercitation exercitation minim magna sit.',
      completed: true,
    },
  ];

  const [isEmpty, setEmptyStatus] = useState(false);

  useEffect(() => {
    const empty = !todoItems.length > 0;
    setEmptyStatus(empty);
  });

  return (
    <ul className="list-container">
      {todoItems.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            deadline={todo.deadline}
          />
        );
      })}
      {isEmpty && (
        <div className="empty-list">
          <div className="notifiers-wrapper">
            <img className="list-icon" src={listIcon} alt="list"></img>
            <p className="empty-info">The tasklist is empty!</p>
          </div>
        </div>
      )}
    </ul>
  );
};

export default hot(TodoList);
