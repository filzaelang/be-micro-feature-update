import { Repository, UpdateResult } from "typeorm";
import { Partai } from "../entity/Partai";
<<<<<<< HEAD
=======
import { Paslon } from "../entity/Paslon";
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
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

<<<<<<< HEAD
=======
    async getAll(): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.find()
            const data = response.map((Partai) => {
                return {
                    id: Partai.id,
                    name: Partai.name,
                    ketuaUmum: Partai.ketuaUmum,
                    visiMisi: Partai.visiMisi,
                    alamat: Partai.alamat,
                    image: Partai.image
                }
            })

            return {
                message: "success get All Data",
                data: data
            }

        } catch (error) {
            return `message: something error while getting all partai`
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.PartaiRepository
                .createQueryBuilder("Partai")
                .where("Partai.id = :id", { id })
                .getOne();
            if (!response) {
                return `message: partai not found`
            }

            return response;
        } catch (error) {
            return `message: something error while getting the data`
        }
    }

    async delete(id: number): Promise<object | string> {
        try {
            const partaiToRemove = await this.PartaiRepository
                .createQueryBuilder("Partai")
                .where("Partai.id = :id", { id })
                .getOne();

            if (!partaiToRemove) {
                return `message: partai not found`;
            }

            await this.PartaiRepository.remove(partaiToRemove);

            return {
                message: "success deleting the partai",
            };
        } catch (error) {
            return `message: something error while deleting partai`;
        }
    }

>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
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

<<<<<<< HEAD
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

// async delete(id: number): Promise<object | string> {
    //     try {
    //         const partaiToRemove = await this.PartaiRepository
    //             .createQueryBuilder("Partai")
    //             .where("Partai.id = :id", { id })
    //             .getOne();

    //         if (!partaiToRemove) {
    //             return `message: partai not found`;
    //         }

    //         await this.PartaiRepository.remove(partaiToRemove);

    //         return {
    //             message: "success deleting the partai",
    //         };
    //     } catch (error) {
    //         return `message: something error while deleting partai`;
    //     }
    // }

    // async getAll(): Promise<object | string> {
    //     try {
    //         const response = await this.PartaiRepository.find()
    //         const data = response.map((Partai) => {
    //             return {
    //                 id: Partai.id,
    //                 name: Partai.name,
    //                 chairman: Partai.chairman,
    //                 visionAndMission: Partai.visionAndMission,
    //                 address: Partai.address,
    //                 image: Partai.image
    //             }
    //         })

    //         return {
    //             message: "success get All Data",
    //             data: data
    //         }

    //     } catch (error) {
    //         return `message: something error while getting all partai`
    //     }
    // }

    // async getOne(id: number): Promise<object | string> {
    //     try {
    //         const response = await this.PartaiRepository
    //             .createQueryBuilder("Partai")
    //             .where("Partai.id = :id", { id })
    //             .getOne();
    //         if (!response) {
    //             return `message: partai not found`
    //         }

    //         return response;
    //     } catch (error) {
    //         return `message: something error while getting the data`
    //     }
    // }
=======



}
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
