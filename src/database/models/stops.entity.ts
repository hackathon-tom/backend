import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Bus from "./bus.entity";

@Entity()
export default class Stop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @ManyToOne(() => Bus, (bus) => bus.stops)
  bus: Bus;
}
