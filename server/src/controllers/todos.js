import * as todoService from '../services/todos';

// For temporary purpose later it will be replace by req.user.id wherever needed once authentication is done
const reqUserId = 1;

/**
 *  Fetch all todos for a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAllTodos(req, res, next) {
  todoService
    .getAllTodos(reqUserId)
    .then((data) => res.json(data))
    .catch((error) => next(error));
}

/**
 *  Fetch a single todo.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchTodo(req, res, next) {
  todoService
    .getTodoById(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => next(error));
}

/**
 *  Add new todo item.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function addTodo(req, res, next) {
  todoService
    .createTodo(req.body, reqUserId)
    .then((data) => res.json(data))
    .catch((error) => next(error));
}

/**
 *  Modfiy existing todo item.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function modifyTodo(req, res, next) {
  todoService
    .updateTodo(req.body, req.params.id)
    .then((data) => res.json(data))
    .catch((error) => next(error));
}

/**
 *  Remove any single todo item.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function removeTodo(req, res, next) {
  todoService
    .deleteTodo(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => next(error));
}
