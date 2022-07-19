import { UserController } from "./user.controller";
import {Test, TestingModule} from "@nestjs/testing";
import {UserService} from "./user.service";
import {UserRepository} from "./entity/user.repository";

describe('UserModule', () => {
  let userController: UserController
  let userService: UserService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, UserRepository],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  // CONTROLLER
  describe('UserController', () => {
    const body = {
      id: 'dahoon',
      password: '!aaa111'
    }

    it ('FIRST TEST CODE', () => {
      expect(userController.login(body)).toBe('Success String');
    });
  });

  // SERVICE
  describe('UserService', () => {
    const body = {
      id: 'dahoon',
      password: '!aaa111'
    }
    it('login', () => {
      expect(userService.login(body)).toBe(
        [{
          seq: 1,
          id: 'dahoon',
          password: '!aaa111'
        }]
      );
    })
  });





});