import express from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import joi from "joi";
const router = express.Router();

const registerSchema = Joi.object({
    fullname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),


    password: Joi.string().min(6),

})

router.post('/register', (req, res)=>{
    const { error, value } = registerSchema.validate(req.body);
    if(error) return sendResponse(res, 400, null, true, "please input vlaid fields");

    res.send('working on Register Api')
})
router.post('/login', (req, res)=>{})

export default router;