import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { JoinColumn } from "typeorm/browser";
import { v4 as uuid } from "uuid";

import { SignUp } from "./SignUp";

@Entity()
export class Tweets {
  @PrimaryColumn()
  id: string;

  @Column()
  username_id: string;

  @ManyToOne(() => SignUp)
  @JoinColumn({ name: "username" })
  username: SignUp;

  @Column()
  tweet: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
