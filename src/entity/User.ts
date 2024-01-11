import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToOne, OneToOne } from "typeorm";
import { Artikel } from "./Artikel";
import { Voter } from "./Voter";

<<<<<<< HEAD
export type UserRoleType = "admin" | "editor" | "ghost"
=======
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
<<<<<<< HEAD
    address: string;

    @Column()
    gender: string;
=======
    alamat: string;

    @Column()
    jenisKelamin: string;
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    age: number;

<<<<<<< HEAD
    @Column({
        type: "enum",
        enum: ["admin", "editor", "ghost"],
        default: "ghost",
    })
    role: UserRoleType

=======
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
    @OneToOne(() => Voter, (voter) => voter.user, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    voter: Voter;

    @OneToMany(() => Artikel, (artikel) => artikel.user, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    articles: Artikel[];
}

