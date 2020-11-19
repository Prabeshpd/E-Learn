import Todo from '../models/todos';

/**
 * Get all todos of a specific user.
 *
 * @param {Number | String} userId
 * @returns {Promise}
 */
export function getAllTodos(userId) {
  return Todo.where({ user_id: userId }).fetchAll();
}

/**
 * Get single todo.
 *
 * @param {Number | String} id
 * @returns {Promise}
 */
export function getTodoById(id) {
  return Todo.where({ id }).fetch();
}

/**
 * Create new todo
 *
 * @param {Object} todo
 * @returns {Promise}
 */
export function createTodo(todo, userId) {
  return new Todo({ ...todo, user_id: userId }).save();
}

/**
 * Update todo item.
 *
 * @param {Object} updatedDetails
 * @param {Number | Sting} id
 * @returns {Promise}
 */
export function updateTodo(updatedDetails, id) {
  return Todo.where({ id }).save(
    {
      ...updatedDetails,
    },
    {
      patch: true,
    }
  );
}

/**
 * Delete todo item.
 *
 * @param {Number | String} id
 * @returns {Promise}
 */
export function deleteTodo(id) {
  return Todo.where({ id }).destroy();
}
