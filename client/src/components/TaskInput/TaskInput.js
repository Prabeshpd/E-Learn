import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';

import { addTodo } from '@Actions/todos';

import plusIcon from '@Assets/plus.png';
import '@Styles/TaskInput.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState(null);

  const dispatch = useDispatch();

  const clearInput = () => {
    setTask('');
    setDeadline(null);
  };

  const handleTaskSubmit = (event) => {
    event.preventDefault();

    const todo = {
      task,
      deadline,
      completed: false,
    };
    dispatch(addTodo(todo));

    clearInput();
  };

  return (
    <form className="new-entry" onSubmit={handleTaskSubmit}>
      <input
        type="text"
        className="task-field"
        placeholder="Enter new task ..."
        onChange={(event) => setTask(event.target.value)}
        value={task}
      ></input>
      <div className="deadline-input">
        <DateTimePicker onChange={setDeadline} value={deadline} />
      </div>
      <button type="submit" className="add-btn">
        <img src={plusIcon} className="add-icon" alt="add"></img>
      </button>
    </form>
  );
};

export default TaskInput;
