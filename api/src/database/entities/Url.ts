import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  slug!: string;

  @Column("varchar")
  originalUrl!: string;

  @Column()
  counter!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;
}
