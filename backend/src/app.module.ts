import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MysqlConfigModule } from "./config/db/config.module";
import { MysqlConfigService } from "./config/db/config.service";
import { routes } from './Routes';
import { RouterModule } from 'nest-router';
import {UserModule} from "./user/user.module";

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    UserModule,
    ConfigModule.forRoot({ isGlobal: true, }),
    TypeOrmModule.forRootAsync({
      imports: [
        MysqlConfigModule,
      ],
      useClass: MysqlConfigService,
      inject: [MysqlConfigService,]
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
