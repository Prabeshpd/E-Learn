import knexJs from 'knex';
import bookshelf from 'bookshelf';

import knexConfig from './knexfile';

require('dotenv').config({ path: __dirname + '/../.env' });

const environment = process.env.NODE_ENV || 'development';

const knex = knexJs(knexConfig[environment]);
const db = bookshelf(knex);

export default db;
