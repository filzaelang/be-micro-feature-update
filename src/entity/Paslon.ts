import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Partai } from "./Partai";
import { Voter } from "./Voter";

@Entity({ name: "paslons" })
export class Paslon {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    no: number;

    @Column()
    visionAndMission: string;

    @Column()
    image: string;

    @OneToMany(() => Voter, voter => voter.votedPaslon, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    voters: Voter;

    @OneToMany(() => Partai, partai => partai.selectedPaslon, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    partai: Partai[];

}