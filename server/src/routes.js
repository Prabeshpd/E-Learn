import { Router } from 'express';
import app from '.';

const router = Router();
import userRouters from './routes/users/index';

router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version,
  });
});

router.use('/users', userRouters);

export default router;
