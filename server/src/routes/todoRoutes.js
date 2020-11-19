import { Router } from 'express';
import * as todoController from '../controllers/todos';

const router = Router();

router.route('/').get(todoController.fetchAllTodos).post(todoController.addTodo);

router.route('/:id').get(todoController.fetchTodo).put(todoController.modifyTodo).delete(todoController.removeTodo);

export default router;
