import { PrismaClient } from '@prisma/client'
import "dotenv/config.js"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

const login = async (req) =>{
    const {email, password} = req.body;

    const user = await prisma.user.findFirst({
        where:{
            email: email
        },
        include: {
            role: true
        }
    })
    if(!user){
        return("User of given email doesnot exists!");
    }
    if(password != user.password){
        return("Password doesnot match!");
    }
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: user
    }, process.env.jwtsecretcode);

    return {token}; //token: token
}

const register = async (req) => {
    const {email, password, roleId} = req.body

    const result = await prisma.user.create({
        data:{
            email,
            password,
            role:{
                connect:{id: roleId}
            }
        }
    })
    return result
}





export {login, register}