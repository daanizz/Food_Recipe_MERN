import express from "express";
import {addRecipe , getRecipe, getRecipes ,deleteRecipe, editRecipe} from "../controller/recipe.controller.js";

const router=express.Router();

router.get("/", getRecipes);//all recipes
router.get("/:id", getRecipe);//recipe by id
router.post("/", addRecipe);//posting new recipe
router.delete("/:id", deleteRecipe);//delete any recipe
router.put("/:id", editRecipe);//edit


export default router;