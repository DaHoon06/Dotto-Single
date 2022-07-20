import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonDate } from "../date.entity";

@Entity()
export class User extends CommonDate{
  @PrimaryGeneratedColumn()
  SEQ: number;

  @Column()
  ID: string;

  @Column()
  PASSWORD: string;

  @Column()
  NICKNAME: string;

  @Column()
  PHONE: string;

  @Column()
  GENDER: string;

  @Column({ default: '1' })
  SOCIALTYPE: string;



}