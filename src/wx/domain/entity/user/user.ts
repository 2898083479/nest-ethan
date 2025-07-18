import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column({ default: true })
    status: boolean;
}