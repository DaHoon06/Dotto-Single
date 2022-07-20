import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "../entity/user/user.entity";

export interface UserInformationDto {
  id: string;
  password: string;
}

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/login')
  async login(@Body() body: UserInformationDto): Promise<User[]> {
    console.log(body);
    body.id = 'dahoon';
    body.password = '!aaa111';
    return await this.userService.login(body);
  }

}