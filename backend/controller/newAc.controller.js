import userModel from "../Model/user.model";
import bcrypt from 'bcrypt'

export const createAccount=async(req,res)=>{
    const newUser=req.body;
    
    let existingUser=await userModel.findOne({email:newUser.email})
    if(existingUser){
        res.status(400).send("The user already exist with the same email Id");
    }
    else{
        try {
            const salt=await bcrypt.genSalt(10)
            const password=await bcrypt.hash(newUser.password,salt)
            const user=new userModel({
                Name:newUser.name,
                Role:"user",
                Email:newUser.email,
                Hashpwd:password
            })
            await user.save()
            return res.status(201).send("User created")

        } catch (error) {
            return res.status(500).send("User creation error")
        }
    }
}