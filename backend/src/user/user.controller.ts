import { Body,Request, Controller, Get, Post, Query, UseFilters } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "../entity/user/user.entity";
import { ShareFilter } from "../guards/share.filter";

export interface UserInformationDto {
  id: string;
  password: string;
}

@UseFilters(new ShareFilter())
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/join')
  async createUser(@Body() body: any) {

  }

  @Post('/login')
  async login(@Body() body: UserInformationDto): Promise<User[]> {
    return await this.userService.login(body);
  }

  @Post('/sha-login')
  async shaLoginUser(@Body() body: any) {
    return await this.userService.login(body);
  }

  @Get('/verify')
  async verify(@Request() req, @Query() query) {
    try {
      const { login = '' } = query;
      const token = req.headers.authorization || '';
      return this.userService.verify(token, login);
    } catch (e) {
      throw e;
    }
  }

}