import UserRepository from 'api/User/Domain/UserRepository';

export class UserCreator {
  private repository: UserRepository;

  constructor({ repository }: { repository: UserRepository }) {
    this.repository = repository;
  }

  public register(internaut: any) {
    if (internaut) {
      return this.repository.registerInternaut(internaut);
    } else throw new Error('Internaut invalid data');
  }
}
