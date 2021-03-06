import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MysqlConfigModule } from "./config/db/config.module";
import { MysqlConfigService } from "./config/db/config.service";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),
    TypeOrmModule.forRootAsync({
      imports: [
        MysqlConfigModule,
      ],
      useClass: MysqlConfigService,
      inject: [MysqlConfigService,]
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
