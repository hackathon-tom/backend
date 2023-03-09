import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Stop from "./stops.entity";

@Entity()
export default class Bus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @OneToMany(() => Stop, (stop) => stop.bus, { eager: true })
  stops: Stop[];
}
