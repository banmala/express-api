import {Router} from "express";
import authRoute from "./auth.route.js";
import studentRoute from "./student.route.js"
import roleRouter from "./role.route.js"
import permissionRouter from "./permission.route.js"

const router = Router()


router.use("/auth",authRoute)
router.use("/student",studentRoute)
router.use("/role",roleRouter)
router.use("/permission",permissionRouter)

export default router;