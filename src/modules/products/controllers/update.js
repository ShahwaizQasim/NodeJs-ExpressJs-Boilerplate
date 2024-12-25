import UpdateUser from "../services/update.js";

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UpdateUser(id, req.body);
        res.status(200).send({ status: 200, message: "user updated successfully" })
    } catch (error) {
        res.status(500).send({ status: 500, message: error })
    }
}

export default updateController;