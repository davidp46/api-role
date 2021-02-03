import { createContainer, asClass } from 'awilix';
import MongoUserRepository from 'services/db/MongoUserRepository';
import { UserFinder } from './UserFinder';

const container = createContainer();

container.register({
  repository: asClass(MongoUserRepository).singleton(),
  UserFinder: asClass(UserFinder).singleton(),
});

export default container.resolve<UserFinder>('UserFinder');
