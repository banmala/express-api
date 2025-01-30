import {Router} from "express";
import authRoute from "./auth.route.js";
import studentRoute from "./student.route.js"
import roleRouter from "./role.route.js"
import permissionRouter from "./permission.route.js"
import departmentRouter from "./department.route.js"
import authentication from "../middlewares/authentication.js"

const router = Router()


router.use("/auth",authRoute)

router.use(authentication)

router.use("/student",studentRoute)
router.use("/role",roleRouter)
router.use("/permission",permissionRouter)
router.use("/department",departmentRouter )

export default router;