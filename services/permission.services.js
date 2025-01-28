import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createPermission = async (req) => {
    const {claim, action} =  req.body;
    const result = await prisma.permission.create({
        data:{
            claim,
            action
        }
    })
    return result;
}

export {createPermission}