import db from '../db';
import User from './users';

const Todo = db.model('Todo', {
  tableName: 'todos',
  user: () => {
    return this.belongsTo(User);
  },
});

export default Todo;
