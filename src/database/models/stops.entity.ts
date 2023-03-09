import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Bus from "./bus.entity";

@Entity()
export default class Stop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "varchar", length: 256 })
  latitude: string;

  @Column({ type: "varchar", length: 256 })
  longitude: string;

  @ManyToOne(() => Bus, (bus) => bus.stops)
  bus: Bus;
}
