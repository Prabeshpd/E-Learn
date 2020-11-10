import fs from 'fs';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from './middlewares/cors';
import exphbs from 'express-handlebars';
import router from './routes';
import config from './config';

const app = express();

const APP_PORT = config.node_env === 'test' ? config.test.port : config.app.port;
const APP_HOST = config.app.host;

app.set('port', APP_PORT);
app.set('host', APP_HOST);

// const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

app.locals.title = config.app.name;
app.locals.version = config.app.version;

app.use(favicon(path.join(__dirname, '/../public', 'favicon.ico')));
console.log(cors);
app.use(cors);
app.use(helmet());
app.use(compression());
app.use(morgan('tiny'));
app.use(bodyParser.json());
process.send = process.send || function () {};

app.use(express.static(path.join(__dirname, '/../public/images')));
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use('/api/v1', router);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server started at http://${app.get('host')}:${app.get('port')}/api/v1`);
});

export default app;
