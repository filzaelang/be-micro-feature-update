import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default new class AuthServices {
    private readonly AuthRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(data: any): Promise<object | string> {
        try {
            const username = await this.AuthRepository.count({ where: { username: data.username } })
            if (username > 0) return `Username : ${data.username} is already registered`

            const hashPassword = await bcrypt.hash(data.password, 10);

            const obj = this.AuthRepository.create({
                fullname: data.fullname,
                address: data.address,
                gender: data.gender,
                username: data.username,
                password: hashPassword,
                age: data.age,
                role: data.role
            })

            const resRegist = await this.AuthRepository.save(obj)

            return {
                message: "success creating a new user",
                data: resRegist
            }
        } catch (error) {
            return `message: something error while creating user`
        }
    }

    async login(data: any): Promise<object | string> {
        try {
            const checkUsername = await this.AuthRepository.findOne({ where: { username: data.username } })
            if (!checkUsername) return `Email : ${data.username} User not found`

            const comparePassword = await bcrypt.compare(data.password, checkUsername.password)
            if (!comparePassword) return `password is wrong !`

            const obj = this.AuthRepository.create({
                id: checkUsername.id,
                fullname: checkUsername.fullname,
                gender: checkUsername.gender,
                address: checkUsername.address,
                age: checkUsername.age,
                username: checkUsername.username
            })

            const token = jwt.sign({ obj }, "ANJAY", { expiresIn: "1h" })

            return {
                message: "login success",
                token,
            }
        } catch (error) {
            return "something error while loggedin"
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.AuthRepository.find()
            return {
                message: "success get all user",
                data: response
            }
        } catch (error) {
            return "message: something error while get all user"
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.AuthRepository.findOneBy({ id })
            return {
                message: "success get one user",
                data: response
            }
        } catch (error) {
            return "message: something error while get one user"
        }
    }
}