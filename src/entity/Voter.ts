import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { Paslon } from "./Paslon"
import { User } from "./User"

@Entity({ name: "voters" })
export class Voter {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User, user => user.voter, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "userId" })
    user: User

    @ManyToOne(() => Paslon, (paslon) => paslon.voters, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    votedPaslon: Paslon
}
