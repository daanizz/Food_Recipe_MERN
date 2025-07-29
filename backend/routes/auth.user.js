import express from "express";
import { createAccount } from "../controller/newAc.controller";

const router=express.Router()

router.post("/createAc",createAccount);

export default router