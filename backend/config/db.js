

import mongoose from "mongoose";

const mongo_connectn=async()=>{
    try {
        const connectn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`the mongodb connection established:${connectn.connection.host}`);
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
}

export default mongo_connectn;