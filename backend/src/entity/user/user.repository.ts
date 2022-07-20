import {FindManyOptions, Repository} from "typeorm";
import { User } from "./user.entity";
import { CustomRepository } from "../../config/db/custom.decorator";

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  public async test(id: string) {
    console.log(this)
    const query = this.createQueryBuilder('USER').where('USER.id = :id',{ id: id });
    console.log(query)
  }
}