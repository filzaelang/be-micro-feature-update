import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({ name: "articles" })
export class Artikel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    article: string;

    @Column()
    image: string;

<<<<<<< HEAD
    @Column("date")
=======
    @CreateDateColumn({ type: "timestamptz" })
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
    date: Date;

    @ManyToOne(() => User, (user) => user.articles)
    user: User;

}

