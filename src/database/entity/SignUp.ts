import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class SignUp {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
