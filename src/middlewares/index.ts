import { NextFunction, Request, Response } from 'express';

export function routeProtected(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { cookies } = req;
  if ('session_id' in cookies) {
    console.log('you have permission to access 🤫');
    console.log('cookie: ', cookies);
    next();
  } else {
    console.log("you don't have permission to access 🧐");
    res.status(401).send({ message: "you don't have permission to access" });
  }
}
