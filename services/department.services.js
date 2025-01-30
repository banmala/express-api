import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const createDepartment = async (req) => {
    const {name} = req.body
    const result = await prisma.department.create({
        data:{
            name: name
        }
    })
    return result
}

export {
    createDepartment
}