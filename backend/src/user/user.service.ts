import { Injectable } from "@nestjs/common";
import { UserRepository } from "../entity/user/user.repository";
import {User} from "../entity/user/user.entity";
import {UserInformationDto} from "./user.controller";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository
  ) {}
  //# TODO: 비밀번호 암호화 변경
  async login(body: UserInformationDto): Promise<any> {
    const result = await this.userRepository.find();
    console.log(result)
    // await this.userRepository.test(id, password);
    // return await this.userRepository.find({
    //   where: {
    //     id: id,
    //     password: password
    //   }
    // });
  }

}