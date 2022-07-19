import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeormModule } from "../config/db/custom.module";
import { UserRepository } from "./entity/user.repository";

@Module({
  imports: [
    TypeormModule.forCustomRepository([UserRepository]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}