import { Request, Response } from "express";
import VoterServices from "../services/VoterServices";
<<<<<<< HEAD
import { createVoteValidation } from "../utils/validator/VoteValidator";
=======
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a

export default new class VoterController {
    async create(req: Request, res: Response) {
        try {
<<<<<<< HEAD
            const data = req.body;
            const loginSession = res.locals.loginSession;

            const { error, value } = createVoteValidation.validate(data);
            if (error) {
                return res.status(400).json(error);
            }

            const voter = {
                user: loginSession.obj.id,
                votedPaslon: value.votedPaslon
            };

            const response = await VoterServices.create(voter);
            return res.status(201).json(response);
        } catch (error) {
            console.error("Error creating a Vote:", error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
=======
            const data = req.body
            // const { error, value } = createVoteValidation.validate(data)
            // if(error) return res.status(400).json(error)

            const response = await VoterServices.create(data);

            return res.status(201).json(response)
        } catch (error) {
            console.error("Error creating vote:", error)
            return res
                .status(500)
                .json({ message: "internal server error", error: error.message })
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await VoterServices.getAll();
            return res.status(200).json(response)
        } catch (error) {
            console.error("Error getting all voter:", error)
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message })
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10)
            const response = await VoterServices.getOne(id)
            return res.status(200).json(response)
        } catch (error) {
            console.error("Error getting voter:", error)
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message })
        }
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
