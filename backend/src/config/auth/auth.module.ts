import {forwardRef, Module} from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserModule } from "../../user/user.module";

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        algorithm: 'HS512',
        expiresIn: process.env.NODE_ENV === 'production' ? '24h' : '60s',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
