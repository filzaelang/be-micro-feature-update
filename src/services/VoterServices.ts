import { Repository } from "typeorm";
import { Voter } from "../entity/Voter";
import { AppDataSource } from "../data-source";

export default new class VoterServices {
    private readonly VoterRepository: Repository<Voter> = AppDataSource.getRepository(Voter)

    async create(data: any): Promise<object | string> {
        try {
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
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.VoterRepository.find({
                relations: ["user", "votedPaslon"],
                select: {
                    user: {
                        fullname: true,
                        address: true,
                        gender: true
                    },
                    votedPaslon: {
                        name: true
                    }
                }
            });

            const countVoters = await this.VoterRepository.count()
            return {
                message: "success get all vote",
                countVoters: countVoters,
                data: response
            };
        } catch (error) {
            return "message: something error while get all vote";
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
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
        }
    }
}