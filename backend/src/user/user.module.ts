import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import {User} from "../entity/user/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import { RouterModule, Routes } from 'nest-router';
import {AuthModule} from "../config/auth/auth.module";
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule, ConfigService } from '@nestjs/config';
const routes: Routes = [

]


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RouterModule.forRoutes(routes),
    AuthModule,
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: 3, // 보호되는 애플리케이션 경로에 대한 , TTL (Time to Live)
        limit: 25, //최대 요청 수에 대한 전역 옵션
      }),
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}