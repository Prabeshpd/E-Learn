import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';

import listIcon from '../../assets/list.png';

const TodoList = () => {
  const todoItems = useSelector((state) => state.todos.items);

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
