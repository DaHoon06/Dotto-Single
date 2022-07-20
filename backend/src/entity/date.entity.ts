import { Column } from "typeorm";

export class CommonDate {
  @Column({ default: new Date() })
  CREATEDAT: Date;

  @Column()
  UPDATEDAT: Date;
}