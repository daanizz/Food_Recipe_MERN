import userModel from "../Model/user.model.js";
import bcrypt from 'bcrypt'

export const createAccount=async(req,res)=>{
    const newUser=req.body;
    
    let existingUser=await userModel.findOne({Email:newUser.email})
    if(existingUser){
        res.status(400).send("The user already exist with the same email Id");
    }
    else{
        try {
            const user=new userModel({
                Name:newUser.name,
                Role:"user",
                Email:newUser.email,
                Hashpwd:newUser.password
            })
            await user.save()
            return res.status(201).send("User created")

        } catch (error) {
            return res.status(500).send("User creation error")
        }
    }
}