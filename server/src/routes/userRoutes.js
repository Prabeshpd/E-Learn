import { Router } from 'express';

import * as userController from '../controllers/users';

const router = Router();

router.post('/signUp', async (req, res, next) => {
  const { body: payload } = req;

  userController
    .createUser(payload)
    .then((d) => res.json(d))
    .catch((e) => next(e));
});

export default router;
