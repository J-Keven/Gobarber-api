import FakeUserRepository from '@modules/users/repositories/fake/FakeUserRepository';
import ListProvidersService from '../../services/ListProvidersService';

let fakeUserRepository: FakeUserRepository;
let listProvidersService: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    listProvidersService = new ListProvidersService(fakeUserRepository);
  });

  it('should be able lista all providers', async () => {
    const user1 = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johhdoe@example.com',
      password: '123456',
    });

    const user2 = await fakeUserRepository.create({
      name: 'John Tre',
      email: 'johhtre@example.com',
      password: '123456',
    });

    const userLogged = await fakeUserRepository.create({
      name: 'John Qua',
      email: 'johnqua@example.com',
      password: '123456',
    });

    const providers = await listProvidersService.execute(userLogged.id);

    expect(providers).toEqual([user1, user2]);
  });
});
