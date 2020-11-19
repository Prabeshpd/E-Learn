import http from '@Utils/https';
import config from '../config';

export const getTodos = async () => {
  const { data } = await http.get(config.endpoints.todos);
  return data;
};

export const addNewTodo = async (todo, todos) => {
  const { data } = await http.post(config.endpoints.todos, todo);
  return [...todos, data];
};

export const deleteTodo = async (id, todos) => {
  await http.delete(`${config.endpoints.todos}/${id}`);
  return todos.filter((todo) => todo.id !== id);
};

export const toggleTodo = async (id, todo, todos) => {
  const { data } = await http.put(`${config.endpoints.todos}/${id}`, {
    completed: !todo.completed,
  });
  return todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...data,
      };
    }
    return todo;
  });
};
