import { get } from 'config';
import UserRepository from 'api/User/Domain/UserRepository';
import { connect } from 'mongoose';
import { UserModel } from 'api/User/Infrastructure/UserMongoModel';
import User from 'api/User/Domain/User';

export default class MongoUserRepository implements UserRepository {
  async connect() {
    return await connect(get('mongodb.url'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  async registerInternaut(internaut: any): Promise<User> {
    this.connect();
    console.log('internaut: ', internaut);
    const user = new UserModel(internaut);
    await user.save();
    return Promise.resolve(user as User);
  }

  findAll(): Promise<any> {
    console.log('Implementación de UserRepository getAllUser');
    return Promise.resolve(true);
  }

  findByIdentifier(identifier: string): Promise<any> {
    return Promise.resolve(
      `db mongo finding user with identifier: ${identifier}`
    );
  }
}
