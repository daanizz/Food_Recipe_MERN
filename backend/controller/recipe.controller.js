import recipeM from "../Model/recipe.model.js";
import mongoose from "mongoose";

export const addRecipe=async(req,res)=>{
    // res.json({message:"addRecipe"});
    const newRecipe=req.body;
    if(!newRecipe.Title || !newRecipe.Ingredients || !newRecipe.Instructions || !newRecipe.coverImage || !newRecipe.Time){
        res.status(400).json({message:"every field is not filled"});
    }
    else{
        try {
            
            await recipeM.create(newRecipe);
            res.status(200).json({success:true,body:newRecipe});
            
        } catch (error) {
            res.status(200).json({success:false});
        }
        
    }
}

export const deleteRecipe=async(req,res)=>{
    const {id}=req.params;
    try{
        await recipeM.findByIdAndDelete(id);
        res.status(200).json({message:"Deleted the recipe"});
    }
    catch(error){
        res.status(200).json({message:"cant delete the recipe"});
    }
    
}

export const editRecipe=async(req,res)=>{

    const {id}=req.params;
    const updated=req.body;
    // console.log("Update data received:", updated);

    if(await !mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ message: "Invalid ID format" });
    }
    

    try {
        const update=await recipeM.findByIdAndUpdate(id,updated,{ new: true, runValidators: true });
        if (!update) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        // console.log("Update result:", update);
        res.status(200).json({message:"succesfully updates",body:update});
    } catch (error) {
        res.status(400).json({message:"update ended in Error!!"});
    }
}

export const getRecipe=async(req,res)=>{
    const {id}=req.params;
    try {
        const recipe=await recipeM.findById(id);
        res.status(200).json({message:"succesfully found",body:recipe});
    } catch (error) {
        res.status(400).json({message:"ended in Error!!"});
    }
}

export const getRecipes=async(req,res)=>{
    try {
        const recipes=await recipeM.find({});
        res.status(200).json({success:true,body:recipes});
    } catch (error) {
        res.status(200).json({success:false});
    }
}