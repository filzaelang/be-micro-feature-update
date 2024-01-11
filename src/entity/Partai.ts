import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Paslon } from "./Paslon";

@Entity({ name: "partai" })
export class Partai {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;  // Nama Partai

    @Column()
<<<<<<< HEAD
    chairman: string;

    @Column()                      //@Column("simple-array")
    visionAndMission: string;

    @Column()
    address: string;
=======
    ketuaUmum: string;

    @Column()                      //@Column("simple-array")
    visiMisi: string;

    @Column()
    alamat: string;
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a

    @Column({ nullable: true })
    image: string;

    @ManyToOne(() => Paslon, paslon => paslon.partai)
    @JoinColumn({ name: "selectedPaslonId" })
    selectedPaslon: Paslon;

}
