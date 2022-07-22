import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @BeforeInsert()
  beforeInsert() {
    console.log('before insert');
  }

  @AfterInsert()
  afterInsert() {
    console.log('after insert', this.id);
  }

  @AfterUpdate()
  afterUpdate() {
    console.log('after update', this.id);
  }

  @AfterRemove()
  afterRemove() {
    console.log('after remove', this.id);
  }
}
