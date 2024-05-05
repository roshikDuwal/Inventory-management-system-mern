import mongoose from "mongoose"
import { PUBLIC_DATA } from "../../constant.js";

export const ConnectDB=async()=>{
    try {
        await mongoose.connect(PUBLIC_DATA.monog_uri)
        console.log(`App is successfully connect with ${mongoose.connection.host}`);
    } catch (error) {
        mongoose.disconnect();
        process.exit(1)
    }
}