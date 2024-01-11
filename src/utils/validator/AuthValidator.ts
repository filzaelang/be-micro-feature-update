import * as Joi from "joi"

export const registerSchema = Joi.object({
    fullname: Joi.string().required(),
    address: Joi.string().required(),
    username: Joi.string().required(),
    gender: Joi.string().required(),
    age: Joi.number().required(),
    password: Joi.string().required(),
    role: Joi.string().allow(null)
})

export const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

export const getOneUserValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
})