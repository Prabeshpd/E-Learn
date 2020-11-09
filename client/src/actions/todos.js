import * as todoService from '@Services/todos';

export const FETCH_TODOS_BEGIN = 'FETCH_TASKS_BEGIN';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const fetchTodosBegin = () => {
  return { type: FETCH_TODOS_BEGIN };
};

export const fetchTodosSuccess = (todos) => {
  return { type: FETCH_TODOS_SUCCESS, payload: todos };
};

export const fetchTodosFailure = (error) => {
  return { type: FETCH_TODOS_FAILURE, payload: error };
};

export const addTodo = (todo) => {
  return (dispatch, getState) => {
    dispatch(fetchTodosBegin());
    try {
      const todos = todoService.addNewTodo(todo, getState().todos.items);
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosFailure(error));
    }
  };
};

export const deleteTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchTodosBegin());
    try {
      const todos = todoService.deleteTodo(id, getState().todos.items);
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosFailure(error));
    }
  };
};

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchTodosBegin());
    try {
      const todos = todoService.toggleTodo(id, getState().todos.items);
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosFailure());
    }
  };
};
