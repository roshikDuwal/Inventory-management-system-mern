import express from "express"
import AuthRouter from "./auth.route.js"
const router = express.Router();

const routes=[
    {
        path:"/auth",
        route:AuthRouter
    }
]

routes.forEach((cur)=>{
    router.use(cur.path,cur.route);
})

export default router