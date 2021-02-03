import { config } from 'dotenv';

config();
const { MONGO_URL, SECRET_SESSION } = process.env;

export default {
  port: 3000,
  domain: 'localhost',
  mongodb: {
    url: MONGO_URL,
  },
  session: {
    secret: SECRET_SESSION,
    maxAge: 3600000,
    secure: false,
  },
  logger: 'dev',
  crypt: {
    salt: 10,
  },
};
