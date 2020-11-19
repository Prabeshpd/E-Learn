import db from '../db';
import Todo from './todos';

const User = db.model('User', {
  tableName: 'users',
  todo: () => {
    return this.hasMany(Todo);
  },
});

export default User;
