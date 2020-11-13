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

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(fetchTodosBegin());
    try {
      const todos = await todoService.getTodos();
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosFailure(error));
    }
  };
};

export const addTodo = (todo) => {
  return async (dispatch, getState) => {
    dispatch(fetchTodosBegin());
    try {
      const todos = await todoService.addNewTodo(todo, getState().todos.items);
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosFailure(error));
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch, getState) => {
    dispatch(fetchTodosBegin());
    try {
      const todos = await todoService.deleteTodo(id, getState().todos.items);
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosFailure(error));
    }
  };
};

export const toggleTodo = (id, todo) => {
  return async (dispatch, getState) => {
    dispatch(fetchTodosBegin());
    try {
      const todos = await todoService.toggleTodo(id, todo, getState().todos.items);
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosFailure(error));
    }
  };
};
