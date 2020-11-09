export const addNewTodo = (todo, todos) => {
  const addedTodos = [...todos, todo];
  return addedTodos;
};

export const deleteTodo = (id, todos) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  return updatedTodos;
};

export const toggleTodo = (id, todos) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
  return updatedTodos;
};
