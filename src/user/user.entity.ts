import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  birthday: string;
  @Column()
  email: string;
  @Column()
  nationalIdCard: string;
  @Column()
  postJob: string;
  @Column()
  address: string;
  @Column()
  zipCode: string;
  @Column()
  personalPhoneNumber: string;
  @Column({nullable:true})
  //password:string=Math.random().toString(36).slice(-8);
  password:string;
}