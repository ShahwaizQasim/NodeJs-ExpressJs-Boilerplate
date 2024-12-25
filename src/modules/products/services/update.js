import { updateData } from "../db/index.js";

const UpdateUser = async (id, data) => {
    return await updateData(id, data);
}

export default UpdateUser;