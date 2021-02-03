import { config } from 'dotenv';

config();
const {
  PORT,
  DOMAIN,
  LOGGER,
  MONGO_URL,
  SECRET_SESSION,
  MAX_AGE_SESSION,
  SECURE_SESSION,
} = process.env;

export default {
  port: PORT,
  domain: DOMAIN,
  mongodb: {
    url: MONGO_URL,
  },
  session: {
    secret: SECRET_SESSION,
    maxAge: MAX_AGE_SESSION,
    secure: SECURE_SESSION,
  },
  logger: LOGGER,
};
