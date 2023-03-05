import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import UserInterface from "../interfaces/UserInterface";
import Authority from "./authority.entity";

@Entity()
export default class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Authority, (authority) => authority.user, { eager: true })
  authorities: Authority[];
}
