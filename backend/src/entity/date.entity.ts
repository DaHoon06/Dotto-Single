import { Column } from "typeorm";

export class CommonDate {
  @Column({ default: new Date() })
  CREATED_AT: Date;

  @Column()
  UPDATED_AT: Date;
}