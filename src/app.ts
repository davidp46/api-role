import 'reflect-metadata';
import express, { Application } from 'express';
import { get } from 'config';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import UserController from 'api/User/UserController';

const app: Application = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: get('session.secret'),
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: get('session.secure'),
      maxAge: get('session.maxAge'),
    },
  })
);

app.use('/users', UserController);

module.exports = app;
