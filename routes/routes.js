import {Router} from "express";
import authRoute from "./auth.js";
import studentRoute from "./student.js"

const router = Router()


router.use("/auth",authRoute)
router.use("/student",studentRoute)


export default router;