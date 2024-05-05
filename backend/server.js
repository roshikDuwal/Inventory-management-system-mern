import { config } from "dotenv";
import { PUBLIC_DATA } from "./constant.js";
import app  from "./src/app.js";
import { ConnectDB } from "./src/config/db.config.js";

config();

ConnectDB();

app.listen(PUBLIC_DATA.port,()=>{
    console.log(`App is listen at http://localhost:${PUBLIC_DATA.port}`);
})