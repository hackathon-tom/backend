import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";

export enum AuthorityType {
  READ = "READ",
  WRITE = "WRITE",
  CREATE = "CREATE",
  DELETE = "DELETE",

  CREATE_BUSES = "CREATE_BUSES",
  DELETE_BUSES = "DELETE_BUSES",
  MODIFY_BUSES = "MODIFY_BUSES",

  CREATE_BUS_STOPS = "CREATE_BUS_STOPS",
  DELETE_BUS_STOPS = "DELETE_STOPS",
  MODIFY_BUS_STOPS = "MODIFY_BUS_STOPS",
}

@Entity()
export default class Authority {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("enum", { enum: AuthorityType })
  type: AuthorityType;

  @ManyToOne(() => User, (user) => user.authorities)
  user: User;
}
