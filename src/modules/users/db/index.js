import UserModel from "../models/index.js"



const addData = async(data) => {
    return await UserModel(data).save();
}

export default addData;