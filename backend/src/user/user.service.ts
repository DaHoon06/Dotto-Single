import { Injectable } from "@nestjs/common";
import { UserRepository } from "./entity/user.repository";
import {User} from "./entity/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {UserInformationDto} from "./user.controller";

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository
  ) {}
  //# TODO: 비밀번호 암호화 변경
  async login(body: UserInformationDto): Promise<User[]> {
    const { id, password } = body;

    return await this.userRepository.find({
      where: {
        id: id,
        password: password
      }
    });
  }

}