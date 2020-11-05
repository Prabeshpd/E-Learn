import fs from 'fs';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import compression from 'compression';
import exphbs from 'express-handlebars';
import router from './routes';

const app = express();

// const APP_PORT = config.node_env === 'test' ? config.test.port : config.app.port;
// const APP_HOST = config.app.host;

app.set('port', '3000');
app.set('host', '0.0.0.0');

// const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

app.locals.title = 'demo';
app.locals.version = '1.0.0';

app.use(favicon(path.join(__dirname, '/../public', 'favicon.ico')));
// app.use(cors);
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
