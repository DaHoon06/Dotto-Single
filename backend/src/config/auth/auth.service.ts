import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  //token 생성 user json 형태로 받음
  async createUserToken(user: any, login: string = ''): Promise<string> {
    const payload = {
      nickname: user.NAME,
      id: user._id,
      role: user.ROLE,
    };
    if (login === 'login') payload['userPwd'] = user.PWD;
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: { id: string; password: string }) {
    const { id, password } = payload;
    return { id, password };
  }

  async decodeToken(token: string): Promise<{
    nickname: string;
    id: string;
    role: string;
  }> {
    const decode = this.jwtService.decode(token.replace('Bearer', '').trim());
    if (decode === null) throw new UnauthorizedException('로그인 정보를 확인해주세요');
    const { nickname, id, role } = decode as {
      nickname: string;
      id: string;
      role: string;
    };
    return { nickname, id, role };
  }
}
