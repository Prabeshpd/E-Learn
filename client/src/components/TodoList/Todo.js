import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';

import formatDeadline from '@Utils/dateFormatter';
import dateParser from '@Utils/dateParser';
import hasDeadlineMissed from '@Utils/checkDeadline';

import deadlineIcon from '../../assets/deadline.png';
import deadlineMissedIcon from '../../assets/deadline-missed.png';
import deleteIcon from '../../assets/delete.png';

import '../../styles/Todo.css';

const Todo = (props) => {
  const getTextStyle = () => {
    return {
      textDecoration: props.completed ? 'line-through' : 'none',
      color: props.completed ? '#7f8285' : 'black',
    };
  };

  return (
    <li className="todo" style={getTextStyle()}>
      <input
        type="checkbox"
        className="completion-checkbox"
        name="completion-status"
        // onChange={props.toggleMark.bind(props.id)}
        defaultChecked={props.completed}
      ></input>
      <span className="task">{props.task}</span>
      <button
        className="delete-task"
        // onClick={props.deleteTask.bind(props.id)}
      >
        <img src={deleteIcon} className="delete-icon" alt="delete"></img>
      </button>
      {props.deadline && (
        <p
          className={hasDeadlineMissed(dateParser(props.deadline)) ? 'deadline missed' : 'deadline'}
        >
          <img
            className="deadline-icon"
            src={hasDeadlineMissed(dateParser(props.deadline)) ? deadlineMissedIcon : deadlineIcon}
            alt="deadline"
          ></img>{' '}
          {String(formatDeadline(dateParser(props.deadline)))}
        </p>
      )}
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  task: PropTypes.string.isRequired,
  deadline: PropTypes.string,
};

export default hot(Todo);
