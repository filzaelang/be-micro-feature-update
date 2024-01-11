import { Repository, UpdateResult } from "typeorm";
import { Partai } from "../entity/Partai";
import { AppDataSource } from "../data-source";

export default new class PartaiServices {
    private readonly PartaiRepository: Repository<Partai> = AppDataSource.getRepository(Partai)

    async create(data: any): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.save(data)

            return {
                message: "success creating a new partai",
                data: response
            }
        } catch (error) {
            return `message: something error while creating partai`
        }
    }

    async update(id: number, data: Partai): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.update(id, data)
            return {
                message: "success update partai",
                data: response
            }
        } catch (error) {
            console.error("Error updating partai:", error);
            return "message: something error while update partai";
        }
    }

    async delete(id: number): Promise<object | string> {
        try {
            const partai = await this.PartaiRepository.findOne({ where: { id: id } });

            if (!partai) {
                return {
                    message: "Partai not found",
                };
            }

            await this.PartaiRepository.remove(partai);

            console.log("Partai deleted:", partai);

            return {
                message: "Success delete partai",
            };
        } catch (error) {
            console.error("Error deleting partai:", error);
            return "message: something error while delete partai";
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.find({
                relations: ["selectedPaslon"],
                select: {
                    selectedPaslon: {
                        no: true,
                        name: true
                    }
                }
            })
            return {
                message: "success get all partai",
                data: response
            }
        } catch (error) {
            return "message: something error while get all partai"
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.findOne({
                where: { id },
                relations: ["selectedPaslon"],
                select: {
                    selectedPaslon: {
                        no: true,
                        name: true
                    },
                },
            })
            return {
                message: "success get one partai",
                data: response
            }
        } catch (error) {
            return "message: something error while get one partai"
        }
    }

}