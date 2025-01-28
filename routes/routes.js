import {Router} from "express";
import authRoute from "./auth.js";
import studentRoute from "./student.js"
import roleRouter from "./role.js"
import permissionRouter from "./permission.js"

const router = Router()


router.use("/auth",authRoute)
router.use("/student",studentRoute)
router.use("/role",roleRouter)
router.use("/permission",permissionRouter)

export default router;