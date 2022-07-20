import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import {User} from "../entity/user/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import { RouterModule, Routes } from 'nest-router';
const routes: Routes = [

]


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RouterModule.forRoutes(routes),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}