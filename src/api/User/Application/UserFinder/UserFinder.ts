import UserRepository from 'api/User/Domain/UserRepository';

export class UserFinder {
  private repository: UserRepository;

  constructor({ repository }: { repository: UserRepository }) {
    this.repository = repository;
  }

  public find(identifier?: string) {
    if (identifier) return this.repository.findByIdentifier(identifier);
    else return this.repository.findAll();
  }
}
