import { PrismaClient } from '@prisma/client'
import "dotenv/config.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const login = async (req) => {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
        where: {
            email: email
        },
        include: {
            role: true
        }
    })
    if (!user) {
        return ("User of given email doesnot exists!");
    }
    bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
            return ("Password doesnot match!");
        }
    });
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: user
    }, process.env.jwtsecretcode);

    return { token, user };
}

const register = async (req) => {
    const { email, password, roleId } = req.body
    password = bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            email,
            password,
            role: {
                connect: { id: roleId }
            }
        }
    })
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: user
    }, process.env.jwtsecretcode);
    return { user, token }
}





export { login, register }