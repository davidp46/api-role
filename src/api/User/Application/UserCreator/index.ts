import { createContainer, asClass } from 'awilix';
import MongoUserRepository from 'services/db/MongoUserRepository';
import { UserCreator } from './UserCreator';

const container = createContainer();

container.register({
  repository: asClass(MongoUserRepository).singleton(),
  UserCreator: asClass(UserCreator).singleton(),
});

export default container.resolve<UserCreator>('UserCreator');
