import { deleteData } from "../db/index.js";


const UserDelete = async (id) => {
    return await deleteData(id)
}

export default UserDelete;