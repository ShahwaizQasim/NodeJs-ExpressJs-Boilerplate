import getAllData from "../services/get.js";

const getController = async (req,res) => {
    try {
        const users = await getAllData();
        res.status(200).send({ status: 200, message: "user fetch successfully", data: users })
    } catch (error) {
        res.status(500).send({ status: 500, message: error })
    }
}

export default getController;