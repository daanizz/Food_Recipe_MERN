import mongoose from "mongoose";

const RecipeSchema=new mongoose.Schema(
    {
        "Title":{
            type: String,
            required: true,
        },
        "Ingredients":{
            type: String,
            required: true
        },
        "Instructions":{
            type: String,
            required: true,
        },
        "Time":{
            type: String,
            required:true
        },
        "coverImage":{
            type: String,
            required: true
        },
        "AutherId":{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)


export default mongoose.model("Recipe",RecipeSchema);