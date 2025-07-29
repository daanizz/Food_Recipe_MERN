import userModel from "../Model/user.model";
import bcrypt from 'bcrypt';

export const Authenitcate=async(req,res)=>{
    const userToLogin=req.body;
    if(!userToLogin.Email || !userToLogin.password){
        return res.send("Error in Login")
    }
    try {
        const user=await userModel.findOne({Email:userToLogin.Email})
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        const passMatch= await bcrypt.compare(userToLogin.password,user.password)
        if(!passMatch){
            return res.status(401).json({ error: "Incorrect password" });
        }

        req.session.userId=user._id
        req.session.Email=user.Email;
        return res.status(201).json("logged in");
        
    } catch (error) {
        return res.status(401).json({ error: "Error occured" });
    }
    
}