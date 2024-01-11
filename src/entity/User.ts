import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToOne, OneToOne } from "typeorm";
import { Artikel } from "./Artikel";
import { Voter } from "./Voter";

export type UserRoleType = "admin" | "editor" | "ghost"
@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    address: string;

    @Column()
    gender: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column({
        type: "enum",
        enum: ["admin", "editor", "ghost"],
        default: "ghost",
    })
    role: UserRoleType

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

