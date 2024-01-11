import { Repository } from "typeorm";
import { Voter } from "../entity/Voter";
import { AppDataSource } from "../data-source";

export default new class VoterServices {
    private readonly VoterRepository: Repository<Voter> = AppDataSource.getRepository(Voter)

    async create(data: any): Promise<object | string> {
        try {
<<<<<<< HEAD
            const checkVoter = await this.VoterRepository.findOne({
                where: {
                    user: {
                        id: data.user
                    }
                }
            })

            if (checkVoter) {
                return "message: voter already vote"
            }

            const response = await this.VoterRepository.save(data)
            return {
                message: "success create vote",
                data: response
            }
        } catch (error) {
            return "message: something error while create vote"
=======
            const response = await this.VoterRepository.save(data)

            return {
                message: "success creating a new vote",
                data: response
            }
        } catch (error) {
            return `message: something error while creating vote`
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.VoterRepository.find({
<<<<<<< HEAD
                relations: ["user", "votedPaslon"],
                select: {
                    user: {
                        fullname: true,
                        address: true,
                        gender: true
=======
                relations: ["User", "Paslon"],
                select: {
                    user: {
                        fullname: true,
                        alamat: true,
                        jenisKelamin: true
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
                    },
                    votedPaslon: {
                        name: true
                    }
                }
            });

            const countVoters = await this.VoterRepository.count()
<<<<<<< HEAD
            return {
                message: "success get all vote",
                countVoters: countVoters,
                data: response
            };
        } catch (error) {
            return "message: something error while get all vote";
=======

            return {
                message: "success get All Vote",
                countVoters: countVoters,
                data: response
            }

        } catch (error) {
            return `message: something error while getting all content`
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
<<<<<<< HEAD
            const response = await this.VoterRepository.findOne({
                where: { id },
                relations: ["User", "Paslon"],
                select: {
                    user: {
                        fullname: true,
                        address: true,
                        gender: true,
                    },
                    votedPaslon: {
                        name: true,
                    },
                },
            });

            const countVoters = await this.VoterRepository.count()
            return {
                message: "success get all vote",
                countVoters: countVoters,
                data: response
            };

        } catch (error) {
            return "message: something error while getting a Vote";
=======
            const response = await this.VoterRepository
                .createQueryBuilder("Voter")
                .where("Voter.id = :id", { id })
                .getOne();
            if (!response) {
                return `message: vote not found`
            }

            return response;

        } catch (error) {
            return `message: something error while getting the vote`
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
        }
    }
}