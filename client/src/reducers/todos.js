import { FETCH_TODOS_BEGIN, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '@Actions/todos';

const INITIAL_STATE = {
  isTodosLoading: false,
  items: [
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
  ],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TODOS_BEGIN:
      return {
        ...state,
        isTodosLoading: true,
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
