import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userModel=new mongoose.Schema(
    {
        "Name":{
            type:String,
            required:true
        },
        "Role":{
            type:String,
            required:true
        },
        "Email":{
            type:String,
            required:true
        },
        "Hashpwd":{
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
)

userModel.pre('save',async function(){
    const user=this
    if(!this.isModified('Hashpwd')) return;
    const salt=await bcrypt.genSalt();
    this.Hashpwd=await bcrypt.hash(this.Hashpwd,salt)
})

export default mongoose.model("User",userModel)