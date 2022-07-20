import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class MysqlConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {
  }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      username: this.configService.get<string>('USERNAME'),
      password: this.configService.get<string>('PASSWORD'),
      port: +this.configService.get<number>('PORT'),
      host: this.configService.get<string>('HOST'),
      database: this.configService.get<string>('DATABASE'),
      entities: ['dist/**/**/*.entity{.ts,.js}'],
    };
  }
}