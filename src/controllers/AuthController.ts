import { Request, Response } from "express";
import AuthServices from "../services/AuthServices";
import { loginSchema, registerSchema, getOneUserValidation } from "../utils/validator/AuthValidator";

export default new class AuthController {
    async register(req: Request, res: Response) {
        try {
            const data = {
                fullname: req.body.fullname,
                address: req.body.address,
                gender: req.body.gender,
                username: req.body.username,
                password: req.body.password,
                age: req.body.age,
                role: req.body.role
            }

            const { error, value } = registerSchema.validate(data)
            if (error) return res.status(400).json(error)

            const response = await AuthServices.register(value)

            return res
                .status(201)
                .json(response)
        } catch (error) {
            console.error("Error creating user:", error)
            return res
                .status(500)
                .json({ message: "internal server error", error: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const data = {
                username: req.body.username,
                password: req.body.password
            }

            const { error, value } = loginSchema.validate(data)
            if (error) return res.status(400).json(error)

            const response = await AuthServices.login(value)

            return res
                .status(201)
                .json(response)

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await AuthServices.getAll();
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);

            const { error, value } = getOneUserValidation.validate({ id });

            if (error) {
                return res.status(400).json({
                    message: "Invalid ID provided",
                    error: "Invalid input for type number"
                })
            }

            const response = await AuthServices.getOne(value.id);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}