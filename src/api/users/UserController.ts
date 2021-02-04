import { Router } from 'express';
import { routeProtected } from 'middlewares';
import UserFinder from './application/UserFinder';
import UserCreator from './application/UserCreator';

const router = Router();

/*
  @GET -> /users
  Send all users (exclusive for admin role of platform)
*/
router.get('/', routeProtected, async (req, res) => {
  const result = await UserFinder.find();
  res.cookie('session_id', result).send({ result });
});

/*
  @GET -> /users/:userIdentifier { parameter }
  Send singleton user by identifier
*/
router.get('/:userIdentifier', routeProtected, async (req, res) => {
  const { userIdentifier } = req.params;
  const result = await UserFinder.find(userIdentifier);
  res.cookie('session_id', result).send({ result });
});

/*
  @POST -> /users/register
  TODO: This method create new user as a normal role on platform
  Send cookie and session for the new user registered 
*/
router.post('/register', async (req, res) => {
  const { internaut } = req.body;
  try {
    const result = await UserCreator.register(internaut);
    res.status(201).send({ result });
  } catch (err) {
    res.status(400).send({ error: err.toString() });
  }
});

export default router;
