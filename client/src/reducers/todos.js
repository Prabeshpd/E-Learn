import { FETCH_TODOS_BEGIN, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '@Actions/todos';

const INITIAL_STATE = {
  isTodosLoading: false,
  items: [],
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
