import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class PostController {
    constructor(
        private userBusiness: UserBusiness
    ){}

    createPost = async(req: Request, res: Response) =>{
        const {photo, description, type} = req.body;

        const input: SignupInputDTO ={
            name,
            email,
            password                 
        }
        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({message: "User registered successfully!!", token})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Error in signup!!")
        }
    }
}
