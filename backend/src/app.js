import express from "express";
import cors from "cors"
import morgan from "morgan";
import Router from "./routes/routes.js"
import ApiError from "./utils/apiError.js";
import ErrorHandling from "./middleware/ErrorHandling.js";

const app=express();

app.use(cors());
app.use(morgan("dev"))
app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({extended:false}))
app.use("/api/v1",Router)

app.use("*",(req,res)=>{
    throw new ApiError(400,"page not found")
});

app.use(ErrorHandling);

export default app;