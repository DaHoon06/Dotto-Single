import {BadRequestException, Injectable} from "@nestjs/common";
import { UserRepository } from "../entity/user/user.repository";
import { User } from "../entity/user/user.entity";
import { UserInformationDto } from "./user.controller";
import { InjectRepository } from "@nestjs/typeorm";
import { sha512} from "js-sha512";
import { AuthService } from "../config/auth/auth.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: UserRepository
  ) {}
  async createUser({ password, phone, nickname, id }: any) {
    const _id = id.toUpperCase();
    const PWD = this.convertSha512(password);
    const exists = await this.userRepository.createQueryBuilder();
    if (exists) {
      throw new BadRequestException({
        message: '이미 존재하는 아이디입니다.',
      });
    }
    const pwdRegEx = /^(?=.*?[a-zA-Z0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    if (!pwdRegEx.test(password)) {
      throw new BadRequestException({
        message: '비밀번호는 특수문자를 포함하여 8 ~ 20글자 사이로 입력하여 주세요.',
      });
    }

    const doc: any = {
      ID: id,
      PASSWORD: password,
      NAME: nickname,
      PHONE: phone,
    };

    return {
      result: true,
      message: '가입이 완료되었습니다. 가입하신 메일 계정을 통해 인증을 하신 후에 로그인 하시기 바랍니다.',
    };
  }

  //# TODO: 비밀번호 암호화 변경
  async login(body: UserInformationDto, sha: boolean = false): Promise<any> {
    const { id, password } = body;
    const encodePwd = sha ? password : this.convertSha512(password);
    const result = await this.userRepository.find();
    console.log(result)

    // return await this.userRepository.find({
    //   where: {
    //     id: id,
    //     password: password
    //   }
    // });
  }

  convertSha512(pwd: string): string {
    return sha512.hex(`dotto${pwd}`).toString().toUpperCase();
  }


  async verify(
    token: string,
    login: string = ''
  ): Promise<{
    nickname: string;
    id: string;
    role: string;
    token: string;
  }> {
    try {
      const decode = await this.authService.decodeToken(token);
      const { id } = decode;

      const user = await this.userRepository.createQueryBuilder().where({});
      if (user === null) {
        throw new Error('존재하지 않는 사용자입니다');
      }
      const { ID, NICKNAME, ROLE } = user as any;
      const payload = {
        nickname: NICKNAME,
        id: ID,
        role: ROLE,
      };
      const newToken = await this.authService.createUserToken(user, login);
      return {
        token: newToken,
        ...payload,
      };
    } catch (e) {
      throw new Error(e.message);
    }
  }

}