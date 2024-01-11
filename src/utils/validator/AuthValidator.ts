import * as Joi from "joi"

export const registerSchema = Joi.object({
    fullname: Joi.string().required(),
<<<<<<< HEAD
    address: Joi.string().required(),
    username: Joi.string().required(),
    gender: Joi.string().required(),
    age: Joi.number().required(),
    password: Joi.string().required(),
    role: Joi.string().allow(null)
=======
    alamat: Joi.string().required(),
    jenisKelamin: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    age: Joi.number().required()
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
})

export const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
<<<<<<< HEAD
})

export const getOneUserValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
=======
>>>>>>> 938615da8682dc38b070bcdff45ce80fa050a98a
})