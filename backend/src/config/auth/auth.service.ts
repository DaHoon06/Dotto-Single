import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  //token 생성 user json 형태로 받음
  async createUserToken(user: any, login: string = ''): Promise<string> {
    const payload = {
      userName: user.NAME,
      userId: user._id,
      objectId: user._id,
      role: user.ROLE,
      projects: user.PROJECT,
    };
    if (login === 'login') payload['userPwd'] = user.PWD;
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: { userId: string; userPwd: string }) {
    const { userId, userPwd } = payload;
    return { userId, userPwd };
  }

  async decodeToken(token: string): Promise<{
    userName: string;
    userId: string;
    objectId: string;
    role: string;
    projects: number[];
  }> {
    const decode = this.jwtService.decode(token.replace('Bearer', '').trim());
    if (decode === null) throw new UnauthorizedException('로그인 정보를 확인해주세요');
    const { userName, objectId, userId, role, projects } = decode as {
      userName: string;
      userId: string;
      objectId: string;
      role: string;
      projects: number[];
    };
    return { userName, objectId, userId, role, projects };
  }
}
