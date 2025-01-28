import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const createRole = async (req) => {
    const {name,permissions} = req.body;
    const refinedPermissions = permissions.map((p)=>{return{id:p}})
    const result = await prisma.role.create({
        data:{
            name,
            RolePermission:{
                connect:refinedPermissions
            }
        }
    })
    return result
}

export {createRole}