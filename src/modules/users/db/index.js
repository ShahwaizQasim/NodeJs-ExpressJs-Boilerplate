import UserModel from "../models/index.js"

const addData = async (data) => {
    return await UserModel(data).save();
}

const getData = async () => {
    return await UserModel.find();
}

const deleteData = async (id) => {
    await UserModel.findByIdAndDelete(id);
}
const updateData = async (id, data) => {
    await UserModel.findByIdAndUpdate(id, data);
}

export {
    addData,
    getData,
    deleteData,
    updateData,
};