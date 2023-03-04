import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum Authority {
  READ = "read",
  WRITE = "write",
  DELETE = "delete",
}

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  authorities: Authority[];
}
