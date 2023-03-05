import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";

export enum AuthorityType {
  READ = "READ",
  WRITE = "WRITE",
  CREATE = "CREATE",
  DELETE = "DELETE",
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
