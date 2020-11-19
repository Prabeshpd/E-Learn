import { Router } from 'express';

import userRoutes from './routes/userRoutes';
import todoRoutes from './routes/todoRoutes';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version,
  });
});

router.use('/users', userRoutes);
router.use('/todos', todoRoutes);

export default router;
