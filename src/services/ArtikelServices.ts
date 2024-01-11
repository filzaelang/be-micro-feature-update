import { Repository } from "typeorm";
import { Artikel } from "../entity/Artikel";
import { AppDataSource } from "../data-source";

export default new class ArtikelServices {
    private readonly ArtikelRepository: Repository<Artikel> = AppDataSource.getRepository(Artikel)

    async create(data: any): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository.save(data)

            return {
                message: "success creating a new artikel",
                data: response
            }
        } catch (error) {
            return `message: something error while creating artikel`
        }
    }

    async update(id: number, data: Artikel): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository
                .createQueryBuilder()
                .update(Artikel)
                .set(data)
                .where("id = :id", { id })
                .execute();
            return {
                message: "success update article",
                data: response
            }
        } catch (error) {
            return "message: something error while update article"
        }
    }

    async delete(id: number): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository.delete({ id })
            return {
                message: "success delete article",
                data: response
            }
        } catch (error) {
            return "message: something error while delete article"
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository.find({
                relations: ["user"],
                select: {
                    user: {
                        username: true
                    }
                }
            })

            return {
                message: "success get all article",
                data: response
            }
        } catch (error) {
            return "message: something error while get all article"
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository.findOne({
                where: { id },
                relations: ["user"],
                select: {
                    user: {
                        username: true
                    },
                },
            });
            return {
                message: "success getting a Articles",
                data: response,
            };
        } catch (error) {
            return "message: something error while getting a Articles";
        }
    }
}
