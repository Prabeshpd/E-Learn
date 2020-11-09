import cors from 'cors';
import config from '../config';

const corsOptions = {
  origin: [config.reactAppBaseURI],
};

export default cors(corsOptions);
