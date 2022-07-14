import { UserController } from "./user.controller";
import {Test, TestingModule} from "@nestjs/testing";

describe('UserController', () => {
  let userController: UserController

  beforeEach(async () => {
    const user: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [],
    }).compile();

    userController = user.get<UserController>(UserController);
  });

  describe('root', () => {
    it('return hello world', () => {

    })
  })
})