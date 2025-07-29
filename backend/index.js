import express from "express";
import dotenv from "dotenv";
import mongoConnection from "./config/db.js";
import recipeRoute from "./routes/recipe.route.js"
import Cors from "cors"


const app=express();
dotenv.config();
app.use(Cors());

app.use(express.json());
app.get("/", (req,res)=>{
    res.redirect("http://localhost:5173");
}
);

app.get("/api/auth",authRoute);

app.use("/api/recipes", recipeRoute);

app.listen(5052, ()=>{
    mongoConnection();
    console.log("The app is running on http://localhost:5052");
})