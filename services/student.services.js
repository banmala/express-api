import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const createStudent = async (req) => {
    const {name, roll, address, dob, departmentId} = req.body
    const dateOfBirth = new Date(dob)
    const result = await prisma.student.create({
        data:{
            name,
            dob:dateOfBirth,
            roll,
            address,
            department:{
                connect: {id: departmentId}
            }
        }
    })
    return result
}


const getStudent = async (req) => {
    const result = await prisma.student.findMany()
    return result
}

export {
    createStudent,
    getStudent
}