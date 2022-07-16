import { Injectable } from "@nestjs/common";
import {UserRepository} from "./entity/user.repository";

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository
  ) {}

}