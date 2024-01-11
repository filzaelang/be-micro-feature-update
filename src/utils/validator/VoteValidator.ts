import * as Joi from 'joi'

const createVoteValidation = Joi.object({
    votedPaslon: Joi.number().required()
})

export {
    createVoteValidation
}