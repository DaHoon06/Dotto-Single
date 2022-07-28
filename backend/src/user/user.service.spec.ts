import {Repository} from "typeorm";
import {UserService} from "./user.service";
import {UserRepository} from "../entity/user/user.repository";
import {Test, TestingModule} from "@nestjs/testing";
import {CacheModule} from "@nestjs/common";
import {User} from "../entity/user/user.entity";

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const mockRepository = () => ({
  createUser: jest.fn(),
  login: jest.fn(),
});

describe('UserService',() => {
  const login = {
    id: 'TEST',
    password: 'aa11',
  }

  const createUser = {
    id: '',
    password: '',
  }

  let userService: UserService;
  let userRepository: MockRepository<UserRepository>;

  beforeEach(async () => {
    const modules: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register({})],
      providers: [
        UserService,
        {
          provide: 'UserRepository',
          useFactory: mockRepository
        },
      ],
    }).compile();

    userService = modules.get<UserService>(UserService);
    userRepository = modules.get('UserRepository') as MockRepository<User>;
    userRepository.findOne.mockResolvedValue(login);
  });

  it('DEFINE USER TEST', () => {
    expect(userService).toBeDefined();
  });

  describe('login', () => {
    it('로그인 성공', async () => {
      const userServiceSpyOn = jest.spyOn(userService, 'login');
      expect(await userService.login(login)).toEqual('TEST')
    })
  })
});