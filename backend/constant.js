import { config } from "dotenv";
config();

class PUBLIC_DATA{
    static port=process.env.PORT || 4000
    static monog_uri=process.env.MONGO_URI || "mongodb://localhost"
}

export {PUBLIC_DATA};