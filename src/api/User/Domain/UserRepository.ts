import User from './User';

export default interface UserRepository {
  findAll(): Promise<any>;
  findByIdentifier(identifier: string): Promise<any>;
  registerInternaut(internaut: any): Promise<User>;
}
