import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const createRole = async (req) => {
    const {name,permissions} = req.body;
    const temp = permissions.map((per)=>{
        return {id: per}
    })
    const result = await prisma.role.create({
        data:{
            name,
            permission: {
                connect: temp
            }
        }
    })
    return result
}

const getRoleById = async (req) => {
    const {id} = req.params
    const result = await prisma.role.findFirst({
        where:{
            id: +id
        },
        include:{
            permission: true
        }
    }) 
    //
    return result;
}

const updateRoleById = async (req) => {
    const {id} = req.params
    const {name, permissions} = req.body
    const temp = permissions.map((per)=>{
        return {id: per}
    })
    const result = await prisma.role.update({
        where:{
            id: +id
        },
        data:{
            name,
            permission:{
                set: temp
            }   
        },
        include:{
            permission: true
        }
    }) 
    return result;
}


const getAllRoles = async (req) => {
    const result = await prisma.role.findMany({
        include:{
            permission: true
        }
    }) 
    return result;
}


const deleteRoleById = async (req) => {
    const {id} = req.params
    const result = await prisma.role.delete({
        where:{
            id: +id
        }
    }) 
    return result;
}



















// const getRole = async (req) => {
//     const {id} = req.params

//     const result = await prisma.role.findFirst({
//         where:{
//             id: +id
//         },
//         include:{
//             permission: true
//         }
//     })
//     console.log("Result: ", result)
//     return result
// }

// const updateRole = async (req) => {
//     const {name,permissions} = req.body;
//     const {id} = req.params

//     const refinedPermissions = permissions.map((p)=>{return{id:p}})
//     const result = await prisma.role.update({
//         where:{
//             id: +id
//         },
//         data:{
//             name,
//             permission: {
//                 set: refinedPermissions
//             }
//         },
//         include:{
//             permission: true
//         }
//     })
//     console.log("REsult: ", result)
//     return result
// }
export {
    createRole, 
    // getRole, 
    // updateRole
    getRoleById,
    getAllRoles,
    updateRoleById,
    deleteRoleById
}