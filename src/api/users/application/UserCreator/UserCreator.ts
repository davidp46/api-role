import { communities } from 'api/types/Community';
import UserRepository from 'api/users/domain/UserRepository';

export class UserCreator {
  private repository: UserRepository;

  constructor({ repository }: { repository: UserRepository }) {
    this.repository = repository;
  }

  public register(internaut: any) {
    if (internaut) {
      internaut = {
        ...internaut,
        community: communities[internaut.community],
      };
      return this.repository.registerInternaut(internaut);
    } else throw new Error('Internaut invalid data');
  }
}
